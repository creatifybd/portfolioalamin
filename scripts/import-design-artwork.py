"""Export supplied artwork for web display without cropping or redrawing.
Run with the extracted source directory as argument. Original ZIP stays untouched.
"""
import json,sys
from pathlib import Path
from PIL import Image
root=Path(__file__).resolve().parents[1]
source=Path(sys.argv[1])
items=[
('aro-detergent','Aro-detergent-oitline-file-500gm.jpg','aro-dieline','Full 500g pouch artwork: front identity, side information and fold dimensions in one unaltered layout.'),
('joytun-baby-detergent','Baby-Deteregent-oitline-file-500gm---Pink-outline.jpg','baby-pink-dieline','Pink 500g carton artwork: front, back, side panels and closing flaps.'),
('joytun-baby-detergent','Baby-Deteregent-oitline-file-500gm-blue-outline.jpg','baby-blue-dieline','Blue 500g carton artwork: the companion colorway with the full panel and flap layout.'),
('vix-dishwash-liquid','Dish-Wash---Lemon-Fresh-Outline.jpg','vix-lemon-label','Lemon 500ml bottle label: the curved front identity and information-rich back label.'),
('vix-dishwash-liquid','Dish-Wash---Orange-Fresh-Outline.jpg','vix-orange-label','Orange bottle label: citrus-led graphics and a coordinated front/back layout.'),
('vix-dishwash-liquid','Dish-Wash-Pouch---Lemon-Fresh.jpg','vix-lemon-pouch','Lemon refill pouch artwork: front and reverse panels, seal areas and supplied measurements.'),
('vix-dishwash-liquid','Dish-Wash-Pouch---Orange-Fresh-Outline.jpg','vix-orange-pouch','Orange refill pouch artwork: the matching variant with the complete vertical print layout.'),
('vix-shipping-carton','Dish-Washer-Carton-Design.jpg','vix-carton-dieline','Original carton dieline: 355 × 175 × 234 mm body, bilingual panels, handling icons and 12 × 500ml quantity band.'),
('vix-dishwash-bars','Dishwash Bar 275g-01.jpg','vix-lemon-wrapper','Lemon 275g wrapper artwork: folding sequence, bilingual identity and production information. This is a different pack-size artwork from the earlier mockup.'),
('vix-dishwash-bars','Dishwash Bar 275g-02.jpg','vix-orange-wrapper','Orange 275g wrapper artwork: coordinated front, reverse and fold areas. This is a different pack-size artwork from the earlier mockup.'),
('glasso-shipping-carton','Glass-Cleaner-Carton-Design.jpg','glasso-carton-dieline','Original carton dieline: 280 × 178 × 265 mm body, English and Bengali mascot lockups and 12 × 350ml quantity band.'),
('nolive-handwash','Hand-Wash---Apple-Green.jpg','nolive-apple-label','Apple Green bottle labels: fruit imagery, a green palette and coordinated front/back information.'),
('nolive-handwash','Hand-Wash---Lemon-Fresh.jpg','nolive-gold-label','Gold Fresh bottle labels: the supplied artwork uses the Gold Fresh name, with warm yellow and citrus imagery.'),
('nolive-handwash','Hand-Wash---Levender.jpg','nolive-lavender-label','Lavender bottle labels: botanical imagery and a soft violet identity, paired with the reverse information panel.'),
('nolive-handwash','Hand-Wash---Ocean-Blue.jpg','nolive-ocean-label','Ocean Blue bottle labels: cool blue tones and floral imagery across the front and back.'),
('nolive-shipping-carton','Hand-Wash-Carton-Design.jpg','nolive-carton-dieline','Original carton dieline: 240 × 155 × 170 mm body, bilingual branding, variant checkboxes and 12 × 230ml quantity band.'),
('nolive-handwash','Hand-Wash-Pouch---Apple-Green.jpg','nolive-apple-pouch','Apple Green refill pouch: complete front/back artwork with fold guides, sealing areas and lower product information.'),
('nolive-handwash','Hand-Wash-Pouch---Gold-Fresh.jpg','nolive-gold-pouch','Gold Fresh refill pouch: the yellow variant translated into a full vertical packaging layout.'),
('nolive-handwash','Hand-Wash-Pouch---Levender.jpg','nolive-lavender-pouch','Lavender refill pouch: violet front graphics and a coordinated reverse panel with the supplied measurements.'),
('nolive-handwash','Hand-Wash-Pouch---Ocean-Blue.jpg','nolive-ocean-pouch','Ocean Blue refill pouch: blue brand graphics with the complete print and fold layout.'),
('rio-detergent','Rio-detergent-oitline-file-500gm.jpg','rio-dieline','Full 500g detergent pouch artwork: red-and-blue front identity, side panels, barcode and fold dimensions.'),
('sharo-detergent','Sharo-detergent-oitline-file-500gm.jpg','sharo-dieline','Full 500g detergent pouch artwork: violet brand field, fabric-care imagery and the complete information panels.'),
('layzen-floor-cleaner','floor-clner-1000ml-pink-froral-outline.jpg','layzen-floral-label','Floral 1 litre label artwork: magenta variant, floor-cleaning imagery and matching reverse panel.'),
('layzen-floor-cleaner','floor-clner-1000ml-yellow-lemon-outline.jpg','layzen-lemon-label','Lemon 1 litre label artwork: yellow-green variant, front hierarchy and reverse product information.'),
('mr-glasso-cleaner','glass-clner-350ml-outoine-Fina-_-Smaller-Size---Refil.jpg','glasso-refill-label','Refill bottle labels: the blue mascot-led front and shaped reverse label.'),
('mr-glasso-cleaner','glass-clner-350ml-outoine-Fina-_-Smaller-Size--Spray-Gun.jpg','glasso-spray-label','Trigger spray labels: the front identity and companion reverse artwork adapted to the spray bottle.'),
('j-flush-toilet-cleaner','toilate-clner-750ml-outoine---update.jpg','jflush-label','Updated 750ml toilet-cleaner label artwork: the tapered front and reverse panels. Presented alongside the earlier bottle visualization as a separate artwork version.')]
p=root/'src/featured-projects.json';projects=json.loads(p.read_text());byid={x['id']:x for x in projects}
for id,brand,cap,desc in [('vix-shipping-carton','Vix','12 × 500ml','A shipping carton that extends the Vix retail identity into transport packaging. Bold black branding, a continuous quantity band and bilingual panels organise the box.'),('glasso-shipping-carton','Mr. Glasso','12 × 350ml','A mascot-led shipping carton for the glass-cleaner range. Black linework on a kraft-colored surface connects product recognition with handling and batch information.'),('nolive-shipping-carton','n’Olive','12 × 230ml','A shipping-carton system for the n’Olive hand-wash range. The monochrome identity, variant checkboxes and continuous quantity band create a practical companion to the retail packaging.')]:
 if id in byid: continue
 slug=id.split('-')[0];img=f'/work/{slug}-carton-final.webp' if slug=='glasso' else f'/work/{slug}-carton-mockup.webp'
 x={'id':id,'title':f'{brand} — Shipping Carton','cat':'packaging','client':'Joytun','featured':False,'imgUrl':img,'images':[img],'desc':desc,'tech':['Carton design','Packaging system','Bilingual layout'],'caseStudy':[{'title':'Packaging system','text':f'The {cap} carton separates brand recognition on the broad panels from manufacturing details on the narrow sides. Handling symbols and stacking instructions support the transport format.'},{'title':'Artwork & visualization','text':'The original supplied dieline is shown in full alongside a generated assembled-carton visualization. The flat artwork is the authoritative design reference; the mockup illustrates the folded form.'}],'gallery':[{'src':img,'caption':'Assembled carton visualization based on the supplied design. Refer to the original dieline for exact print artwork.','kind':'mockup'}]}
 projects.append(x);byid[id]=x
for id,filename,slug,caption in items:
 im=Image.open(source/filename).convert('RGB');im.thumbnail((3200,3200),Image.Resampling.LANCZOS)
 out=root/f'public/work/artwork-{slug}.webp';im.save(out,quality=94,method=6)
 img=f'/work/{out.name}';x=byid[id]
 if img not in x['images']:x['images'].append(img)
 x['gallery']=[g for g in x.get('gallery',[]) if g['src']!=img]+[{'src':img,'caption':caption,'kind':'artwork','width':im.width,'height':im.height}]
 if not any(c['title']=='Original artwork' for c in x['caseStudy']):x['caseStudy'].append({'title':'Original artwork','text':'The supplied flat designs reveal the front and reverse layouts, typography and packaging structure. Mockups and artwork are presented as complementary views; pack sizes and design versions may differ where noted.'})
 print(out.name,out.stat().st_size)
p.write_text(json.dumps(projects,ensure_ascii=False,indent=2)+'\n')
