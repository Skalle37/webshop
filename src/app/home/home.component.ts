import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items = [{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/f14AAOSwrlpdLvuX/s-l225.webp","title":"50PCS HSS Cobalt Twist Drill Bit for Wood Plastic Board 1mm-3mm Tools","price":5.55,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qr8AAOSwyWVgh5VO/s-l225.webp","title":"SC1,SC4,KW5,KW1 Original Lishi Tools Car Auto and Plug Reader Hand Tools Kits","price":193.5,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3WEAAOSwWZlfKitV/s-l225.webp","title":"48V 1500RPM 28Nm Cordless Electric Hammer Drill Screwdriver with LED Light Tools","price":26.42,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/IFIAAOSwZmdgcQ-F/s-l225.webp","title":"Black Tip Pivoting Steel Drill Swivel Bit Impact Magnetic Bit Screw Holder Hot","price":5.83,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/cyQAAOSwuwVfvhfh/s-l225.webp","title":"2x Original Replacement Battery Makita BL1860 18V 5AH LXT Li-ion BL1850 BL1840 BL1830","price":50.41,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/YZIAAOSwDklecHm8/s-l225.webp","title":"18V 5AH for Makita Genuine Spare BL1850 B LXT Li-ion BL1860 BL1840 BL1830","price":30,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/k6EAAOSwTQxdHOj0/s-l225.webp","title":"1x Flat + Cross Screwdriver Set 22tlg. Tool Ex German Army (SBD22)","price":30.46,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/bnMAAOSw2gNdhHY5/s-l225.webp","title":"New Listing5pcs HSS 4241 Large Cobalt Hole Cone Step Drill Bit Cutter Tools Set With Case","price":25.89,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/9kQAAOSwXuRe6uhD/s-l225.webp","title":" Jiffy 1/4-28 Threaded 3\" Pancake Angle Drill with Quick Chuck Shaft","price":49,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/o6wAAOSwumle2Z32/s-l225.webp","title":"Nice Jiffy 1/4-28 Threaded 3\" Pancake Angle Drill with Quick Chuck Shaft","price":95,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/K7YAAOSw-pBfBYM1/s-l225.webp","title":"Pneumatic Deburring Tools Portable Metal Chamfering Machine 30000RPM 0.1~0.9mm","price":67.32,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/w1wAAOSwPJ9f95WA/s-l225.webp","title":"Milwaukee 2902-20 M18 Brushless 1/2 in. Hammer Drill (Bare Tool)","price":98.95,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ks0AAOSwiGlgkx6M/s-l225.webp","title":"New ListingDeWALT 8 Piece Set Industrial Magnetic Drill & Drive System #DE2070 NEW SEALED","price":9.99,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/bEMAAOSwyZVgYOhs/s-l225.webp","title":"New ListingFisch Multi-Spur Drill Bit 1-1/2\" Wood Boring Bit Used Steel Drill Press","price":19,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/tYQAAOSwZSFdUtax/s-l225.webp","title":"15 x 50mm SabreCut Revolution PZ2 Impact Drill Driver Screwdriver Bits Set","price":16.68,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/dVkAAOSwTp5gkvtU/s-l225.webp","title":"New Listing11/16\" S&D Black Oxide Drill Bit Milwaukee 48-89-2744 w/ 1/2\" Shank","price":18.89,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/RWYAAOSwS1xgkyPa/s-l225.webp","title":"New Listing8 PC HSS IMPERIAL 1/2 REDUCED SHANK DRILL SET DRILLS 9/16 up to 1\" ","price":115.49,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/BCsAAOSwY4pZZ4m1/s-l225.webp","title":"Dremel MultiPro Rotary Tool Grinder Mini Drill Set 110V/220V with 5PC Accessory","price":26.99,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/igkAAOSwwJZfPWUv/s-l225.webp","title":"3Pcs 1/4\" 3/8\" 1/2\" Impact Driver Tools Socket Adapter Drill BIts Set Hex Shank","price":1.2,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/8JMAAOSwIepgkwKZ/s-l225.webp","title":"New ListingLENOX Tools Hole Saw, Bi-Metal, Speed Slot, Arbored, 2-1/8-Inch (1772951)","price":17.05,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/0tgAAOSwm~pgbKjU/s-l225.webp","title":"SC1 for 5 PIN, SC4 for 6 PIN Lishi 2 in 1 Decoder Lock Plug Reader for Schlage","price":52.63,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qBgAAOSwMnZcu35N/s-l225.webp","title":"Mini Flush Side Precision Shear Wire Snips Pliers Tools Diagonal","price":2.66,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/IxsAAOSwH8ta6yam/s-l225.webp","title":"Milwaukee 2863-20 M18 FUEL™ w/ ONE-KEY™ High Torque Impact Wrench 1/2\" Friction","price":248.95,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/8vsAAOSwm~lfhyQo/s-l225.webp","title":"Milwaukee M12 Rivet Tool Kit 2550-20 (Tool Only)","price":199,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/J0AAAOSwNP5gknf1/s-l225.webp","title":"STAHLWERK Akkuschrauber 3,6 V 1,3 Ah inkl Bits, Akku und Ladegerät","price":23.89,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/zQkAAOSwP4xe4FW5/s-l225.webp","title":"New RYOBI GENUINE 18V ONE+ Multi-Tool W/Accessories P343","price":55.95,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/2BUAAOSwOEZgESXi/s-l225.webp","title":"For Ryobi P108 Battery 18 V 9,0Ah Lithium One Plus RB18L50 Battery RB18L40 P104 DE","price":301.31,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Q44AAOSw0OBgVU-5/s-l225.webp","title":"New Listing10mm Carbide Cross Spear Head Hex Shank Ceramic Porcelain Tile Glass Drill Bit F","price":4.99,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/jzYAAOSw3gFgkxau/s-l225.webp","title":"New ListingHart 10 Pc Titanium Drill Bit Set","price":15,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/aNcAAOSwu~dgb1yP/s-l225.webp","title":"Crimping Pliers Clamp Tools Coaxial Cable Terminals Kit Multi Functional Carbon","price":96.02,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/kp0AAOSw8btgM1ID/s-l225.webp","title":"SCHEPPACH Table Drilling Machine Pillar Drill DP55 with Digital Display & Laser","price":107.98,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/8oUAAOSwy6NgYsY9/s-l225.webp","title":"New ListingSocket Driver Magnetic Nut Impact Drill Bit 10mm Nuts Power Tools Bits FW","price":15.15,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/t4UAAOSwz-dgiQTT/s-l225.webp","title":"115 in 1 Magnetic Precision Screwdriver Set Computer Pc Phone Repair Tool Kit","price":20.99,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/2OEAAOSwPRFfvx03/s-l225.webp","title":"HSS Metric Hand Machine Tap Tools M3 4 5 6 8 10 12 Left Hand Thread Drill Bits","price":18.6,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ukwAAOSwgMNgB44Y/s-l225.webp","title":"SC1,SC4,KW5 Original Lishi Tools Auto and Plug Reader Hand Tools Kits","price":52.5,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5RUAAOSw~sJgB~0m/s-l225.webp","title":"KW1 LISHI 2 In 1 Auto and Plug Reader Hand Tools","price":52.88,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7EMAAOSwcptezOLN/s-l225.webp","title":"Tresko ® 949 piece tool case trolley suitcase wheeled case","price":108.03,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/gocAAOSwZCBeACqE/s-l225.webp","title":"HSS Screw Tap Set Titanium Combination Twist Drill Bit Hex Shank Metal Cutting","price":9.31,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/rZIAAOSwOvNgkxBA/s-l225.webp","title":"New Listing27/32\" S&D Black Oxide Drill Bit Milwaukee 48-89-2749 w/ 1/2\" Shank","price":20.89,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/YnAAAOSwTl5gkwgX/s-l225.webp","title":"New Listing25/32\" S&D Black Oxide Drill Bit Milwaukee 48-89-2747 w/ 1/2\" Shank","price":20.34,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/2bAAAOSwp3Ne-1~d/s-l225.webp","title":"Brake Clutch Bleeder Bleeding Bleed Wrench Set 12 Point Sockets 7 - 12mm 6pc","price":47.99,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xokAAOSw~bBgVU-5/s-l225.webp","title":"12mm Tungsten Carbide Titanium Ceramic Tile Glass Marble Cross Head Drill Bit F","price":4.99,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ik4AAOSwLUpahJNz/s-l225.webp","title":"Cylinder Hone / Engine Honing Tool / Glaze Buster Self Adjusting TE103","price":30.95,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/NgsAAOSwK~pdu5Es/s-l225.webp","title":"15° Angle Pocket Hole Jig Kit 6/8/10mm Adapter Drill Set Tools Guide Woodwo CL","price":7.19,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/HQYAAOSwnt5gbsvs/s-l225.webp","title":"9-Piece Small Electric Drill Bit Collet Mini Twist Drill Tool Chuck Tools","price":6.76,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/HsgAAOSwh8pdnD7H/s-l225.webp","title":"10pc HSS Cutting Burr Set Drill Bits Rotary Grinder Grinding 3mm Shank","price":5.32,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Og8AAOSwjElgZow5/s-l225.webp","title":"Deburring Tool Kit 10pcs High-Speed Steel HSS Rotary Deburr Trimming Tool Handle","price":5.99,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/JjMAAOSwMp9f0hl3/s-l225.webp","title":"Glasbohrer Set 10-tlg. Fliesenbohrer Keramikbohrer Bohrer Spiegel 6mm mit Box DE","price":13.19,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/URUAAOSwE25eqos-/s-l225.webp","title":"Pocket Hole Jig Kit 15 ° Angle 6/8/10mm Adapter Drill Guide Woodworking Set Tool","price":14.75,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/UiIAAOSwubZe-c3V/s-l225.webp","title":"10PCS 0.3-3.0mm Round Shank Precision Micro Mini PCB Auger Twist Drill Bit Set D","price":1.31,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/gWEAAOSwh8VdPHkN/s-l225.webp","title":"Deburring External Chamfer Drill Bit Hexagon Shank Remover Tool Burr Drilli L0Z1","price":3.54,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/bhkAAOSwL9padbF5/s-l225.webp","title":"New ListingCar Door Doors Hinge Adjuster Adjusting Alignment Setter Remover Tool.","price":42.36,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mwEAAOSwgtBfrY5Q/s-l225.webp","title":"New ListingHILTI TE YX   1-3/8\"  ( 1.375 ) - NEW       (#2165918) - Concrete Bit  SDS MAX","price":89,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/2jgAAOSwHY9gYwYv/s-l225.webp","title":"1/4 Hex Shank Keyless Drill Bit Screwdriver Impact Driver Chuck Adapter 0.8-10mm","price":9.03,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/KFEAAOSwLGlcdPAk/s-l225.webp","title":"10Pcs/set PCB print circuit board carbide CNC mini micro drill bits bFATAU l CG","price":4.37,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/WbYAAOSw8yxfhRGo/s-l225.webp","title":"Hinge Hole Cutter Drill Bit Boring Borer Bore Saw Woodworking Hand Tools","price":7.08,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/4IUAAOSwmNxadZma/s-l225.webp","title":"Intergrips Weld Clamps Sheet Metal Fasteners 10pk With Cleco Temporary Rivets","price":76.49,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Dv4AAOSwSUxfEFEy/s-l225.webp","title":"HSS Twist Drills DIN 338 Reduced Shank Metal Drill Steel Drill 12-30 MM","price":25.81,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/n5MAAOSwzmhfFqu~/s-l225.webp","title":"Ganascia Pressatrice TH16mm Ganascia per Pinza Crimpatrice Pinza Jaws Ruotabile","price":51.61,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/GtoAAOSwOb5fFpoh/s-l225.webp","title":"110x Mini Torx Schraubendreher Schraubenzieher Satz Handy Reparatur Werkzeug Set","price":17.52,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/DrgAAOSws2dgUdPU/s-l225.webp","title":"Briefcase key set of glass and other tools 46 pcs tips ratchet red","price":19.81,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/eLcAAOSw2Xpgk3qS/s-l225.webp","title":"New Listing16pcs Carbide Drill Bits Wood Drills Tapper Hole Saw Set Holing Tools M1H4","price":42.72,"category":"tools"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/VkYAAOSwCgFcxr6x/s-l225.webp","title":"New Listing3 in 1 Woodworking Dowel Drilling Template Handheld Borehole Jig Kit Set US","price":67.56,"category":"tools"}];

  constructor(private cartService: CartService) { }
  // kaks komponenti ei saa omavahel suhelda

  ngOnInit(): void {  
  }

onAddToCart(item: any) {
  // this.items = [];
  // this.items.push(item);
  this.cartService.itemsInCart.push(item);
}

}
