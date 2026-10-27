"""Import the original Orbit sheets, keeping full canvases and aspect ratios.
Usage: python scripts/import-orbit-artwork.py /path/to/extracted/orbit
Carton rectangles are viewports on the original sheets, not redrawn artwork.
"""
import io, json, sys
from pathlib import Path
from PIL import Image
root = Path(__file__).resolve().parents[1]
source = Path(sys.argv[1])
labels = [
('elite-hde','16L-Pail.jpg','elite-16l-label','Elite HDE 16L pail label: the red-and-white 15W40 identity expands into a taller layout, with truck imagery, benefit icons and production information.'),
('revx-atf','1L---ATF.jpg','revx-1l-label','RevX ATF DEX III 1L: paired front and reverse labels with red identity bands, a gear-selector photograph and a compact technical information panel.'),
('xpower-series','1L--Xpower.jpg','xpower-1l-labels','The complete XPower 1L label family: front and reverse designs for 10W30, 10W40, 20W40 and 20W50. Consistent orange graphics connect the four grades.'),
('boostx-cng','2L---BOOSTX-CNG.jpg','boostx-2l-label','BoostX CNG 20W50 2L: green flowing graphics and CNG vehicle imagery on the front, paired with a structured reverse label.'),
('supreme','4L--SUPREME.jpg','supreme-4l-label','Supreme 20W50 4L: blue passenger-car graphics, a clear viscosity hierarchy and a matching reverse panel with application and benefit information.'),
('nova-series','5L---NOVA-HD40.jpg1.jpg','nova-hd40-5l-label','Nova HD40 5L: the front and reverse label artwork adapts the blue truck-led identity to a large handled container.'),
('nova-series','5L---NOVA-HD40.jpg2.jpg','nova-hd50-5l-label','Nova HD50 5L: the SAE 50 variant retains the blue-and-white family layout and a coordinated technical reverse panel.'),
('nova-series','5L---NOVA-HD40.jpg3.jpg','nova-hd50-3l-label','Nova HD50 3L: the supplied artwork identifies this as the 3L variant, with a compact front and reverse label layout.'),
('optima-hde','ELITE-HDE-5L.jpg1.jpg','optima-5l-label','Optima HDE 20W50 5L: the original front and reverse artwork uses a red motion graphic, truck imagery and a white technical information field.'),
('elite-hde','ELITE-HDE-5L.jpg2.jpg','elite-5l-label','Elite HDE 15W40 5L: front and reverse labels combine a red-and-silver wordmark with a truck-led lower graphic and organised technical details.'),
('nova-series','NOVA-HD40.jpg1.jpg','nova-hd40-1l-label','Nova HD40 1L: the sloped label silhouette frames the blue brand system, SAE 40 grade and coordinated reverse information panel.'),
('nova-series','NOVA-HD40.jpg2.jpg','nova-hd50-1l-label','Nova HD50 1L: front and reverse labels for the SAE 50 variant, with shared truck imagery and blue-and-orange hierarchy.')]
formats = {
 '1L':([15,10.5,8.75],[72,1152,1908,63,441,1071]),
 '2L':([13.5,10.5,10.25],[73,1045,1801,71,449,1187]),
 '3L':([16,11.25,11.75],[138,1290,2100,125,530,1376]),
 '4L':([17,8.5,12.75],[414,5325,7779,383,1612,5290]),
 '5L':([18,9,13.5],[96,1393,2040,87,411,1383])}
cartons = [
('xpower-series','1L','1','xpower-10w30-carton','XPower 10W30','1L × 12 pieces'),
('xpower-series','1L','2','xpower-10w40-carton','XPower 10W40','1L × 12 pieces'),
('xpower-series','1L','3','xpower-20w40-carton','XPower 20W40','1L × 12 pieces'),
('xpower-series','1L','4','xpower-20w50-carton','XPower 20W50','1L × 12 pieces'),
('nova-series','1L','5','nova-hd50-1l-carton','Nova HD50 · 1L','1L × 12 pieces'),
('boostx-cng','2L','','boostx-2l-carton','BoostX CNG · 2L','2L × 6 pieces'),
('nova-series','3L','','nova-hd50-3l-carton','Nova HD50 · 3L','3L × 6 pieces'),
('supreme','4L','','supreme-4l-carton','Supreme · 4L','4L × 4 pieces'),
('optima-hde','5L','1','optima-5l-carton','Optima HDE · 5L','5L × 4 pieces'),
('elite-hde','5L','2','elite-5l-carton','Elite HDE · 5L','5L × 4 pieces'),
('nova-series','5L','3','nova-hd50-5l-carton','Nova HD50 · 5L','5L × 4 pieces'),
('nova-series','5L','4','nova-hd40-5l-carton','Nova HD40 · 5L','5L × 4 pieces')]
path=root/'src/featured-projects.json'
projects=json.loads(path.read_text()); byid={p['id']:p for p in projects}; manifest=[]
def export(project_id, filename, slug, caption, carton=None):
 im=Image.open(source/filename).convert('RGB'); source_size=list(im.size)
 im.thumbnail((3200,3200),Image.Resampling.LANCZOS)
 out=root/f'public/work/artwork-orbit-{slug}.webp'
 buf=io.BytesIO(); im.save(buf,format='WEBP',quality=94,method=6); out.write_bytes(buf.getvalue())
 src=f'/work/{out.name}'; project_id='orbit-'+project_id;p=byid[project_id]
 p['client']='Orbit Lubricant Industries'
 if src not in p['images']:p['images'].append(src)
 entry=dict(src=src,caption=caption,kind='artwork',width=im.width,height=im.height)
 if carton:entry['carton']=carton
 p['gallery']=[g for g in p['gallery'] if g['src']!=src]+[entry]
 manifest.append(dict(source=filename,sourceSize=source_size,output=src,project=project_id))
 print(out.name,out.stat().st_size,flush=True)
for item in labels:export(*item)
for pid,fmt,num,slug,label,quantity in cartons:
 filename=f'Orbit-{fmt}-Carton-Die-Mark.jpg'+(f'{num}.jpg' if num else '')
 size,bounds=formats[fmt];x0,x1,x2,y0,y1,y2=bounds
 if fmt=='1L' and num in ['3','4']:y0,y1,y2=61,439,1069
 w,h=Image.open(source/filename).size
 def rect(x,y,rw,rh):return [round(v,6) for v in [x/w*100,y/h*100,rw/w*100,rh/h*100]]
 carton=dict(label=label,size=size,quantity=quantity,front=rect(x0,y1,x1-x0,y2-y1),side=rect(x1,y1,x2-x1,y2-y1),flap=rect(x0,y0,x1-x0,y1-y0))
 cap=f'{label} shipping carton: complete supplied artwork for {quantity}, with branding, technical side panel and closing flaps. Dimensions: {" × ".join(map(str,size))} inches.'
 export(pid,filename,slug,cap,carton)
notes={
 'nova-series':'The Nova system carries the same blue-and-orange hierarchy from paired bottle labels into 1L, 3L and 5L shipping cartons. HD40 and HD50 stay visually connected while the viscosity, pack size and quantity remain distinct.',
 'xpower-series':'Four front-and-reverse label pairs and four matching 12-bottle cartons share a consistent structure. Large viscosity grades distinguish the variants, while motorcycle imagery and orange accents connect the range.',
 'revx-atf':'The original 1L front-and-reverse label pair shows how the bold red identity balances with directions, caution text, a QR code and barcode on the information panel.',
 'boostx-cng':'The original 2L labels and six-bottle carton extend the green CNG identity across retail and shipping formats. Brand graphics occupy the broad face; specifications and product information sit on the narrow panel.',
 'supreme':'The 4L label pair and four-bottle carton carry the blue passenger-car identity through the packaging system. The complete flat sheets show the relationship between the display face, technical panel and closing flaps.',
 'elite-hde':'The supplied 5L label pair, 16L pail label and four-bottle shipping carton show how the red Elite HDE identity scales across formats. The 16L design is presented as original label artwork alongside the existing 5L bottle mockup.',
 'optima-hde':'The 5L label pair and four-bottle carton share the red motion graphic, truck imagery and 20W50 hierarchy. Original artwork is grouped with the bottle presentation to reveal the complete packaging system.'}
for pid,note in notes.items():
 p=byid['orbit-'+pid]
 p['caseStudy']=[c for c in p['caseStudy'] if c['title']!='Packaging system']+[dict(title='Packaging system',text=note)]
 if pid!='revx-atf' and 'Carton design' not in p['tech']:p['tech'].append('Carton design')
 p['relatedProjects']=list(dict.fromkeys(p.get('relatedProjects',[])+['orbit-website']))
byid['orbit-elite-hde']['title']='Orbit Elite HDE — 5L & 16L Packaging'
byid['orbit-elite-hde']['desc']='A red-and-white heavy-duty lubricant identity developed across a 5L bottle, a 16L pail label and shipping packaging. Bold Elite HDE typography, a clear 15W40 grade and truck imagery give the family a consistent visual signature.'
path.write_text(json.dumps(projects,ensure_ascii=False,indent=2)+'\n')
(root/'docs/orbit-artwork-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
