"""Rebuild approved alpha-only product cutouts. Requires Pillow, NumPy and SciPy.

Original source artwork is retained. No RGB changes, crop, resize or redraw.
"""
from PIL import Image
from scipy import ndimage as ndi
import numpy as np
from pathlib import Path
root=Path(__file__).resolve().parents[1]
for n in [19,20,21,22,23,25,26]:
 p=root/f'public/work/homecare-{n}.webp'
 im=Image.open(p).convert('RGB'); a=np.asarray(im); v=a.astype(float)
 # Only the neutral, near-white exterior can be removed. Enclosed label whites remain protected.
 neutral=(v.max(2)-v.min(2))<25
 bg=neutral & (v.min(2)>225)
 seed=np.zeros(bg.shape,bool);seed[0,:]=bg[0,:];seed[-1,:]=bg[-1,:];seed[:,0]=bg[:,0];seed[:,-1]=bg[:,-1]
 exterior=ndi.binary_propagation(seed,mask=bg)
 fg=~exterior
 labels,count=ndi.label(fg);sizes=np.bincount(labels.ravel());sizes[0]=0
 fg=labels==sizes.argmax()
 fg=ndi.binary_fill_holes(fg)
 # Close small exterior gaps only; never re-render or change source RGB.
 fg=ndi.binary_closing(fg,iterations=2)
 # In the lower product region, follow the coloured silhouette rather than the neutral studio shadow.
 yy,xx=np.where(fg); start=int(yy.min()+.72*(yy.max()-yy.min()))
 chroma=v.max(2)-v.min(2)
 colour=(chroma>40)&fg
 for y in range(start,fg.shape[0]):
  xs=np.flatnonzero(colour[y])
  row=np.zeros(fg.shape[1],bool)
  if len(xs): row[max(0,xs.min()-1):min(len(row),xs.max()+2)]=True
  fg[y]&=row
 # Feather only the exterior perimeter; enclosed artwork retains full opacity.
 soft=ndi.gaussian_filter(fg.astype(float),.6)
 alpha=np.where(ndi.binary_erosion(fg),255,np.round(soft*255)).astype('uint8')
 rgba=np.dstack([a,alpha]);out=Image.fromarray(rgba)
 dest=root/f'public/work/homecare-{n}-cutout.webp'
 out.save(dest,lossless=True,exact=True,method=6)
 decoded=np.asarray(Image.open(dest).convert('RGBA'))
 visible=decoded[:,:,3]>0
 assert np.array_equal(decoded[:,:,:3][visible],a[visible]), 'Visible RGB changed'
 assert decoded.shape[:2]==a.shape[:2], 'Dimensions changed' 
 print(n,im.size,'transparent',round((alpha==0).mean()*100,1))
