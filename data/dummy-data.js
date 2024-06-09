import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Italià', '#f5428d'),
  new Category('c2', 'Fàcil & Ràpid', '#f54242'),
  new Category('c3', 'Hamburgueses', '#f5a442'),
  new Category('c4', 'Alemany', '#f5d142'),
  new Category('c5', 'Lleuger', '#368dff'),
  new Category('c6', 'Exòtic', '#41d95d'),
  new Category('c7', 'Esmorzar', '#9eecff'),
  new Category('c8', 'Asiàtic', '#b9ffb0'),
  new Category('c9', 'Francès', '#ffc7ff'),
  new Category('c10', 'Estiuenc', '#47fced')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'assequible',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    20,
    [
      '4 Tomàquets',
      "1 Cullerada d'Oli d'Oliva",
      '1 Ceba',
      '250g Espaguetis',
      'Espècies',
      'Formatge (opcional)'
    ],
    [
      'Talla els tomàquets i la ceba en petits trossos.',
      "Bull una mica d'aigua - afegeix-hi sal un cop estigui bullint.",
      "Posa els espaguetis a l'aigua bullint - haurien d'estar llestos en uns 10 a 12 minuts.",
      "Mentrestant, escalfa una mica d'oli d'oliva i afegeix-hi la ceba tallada.",
      'Després de 2 minuts, afegeix els trossos de tomàquet, sal, pebre i les altres espècies.',
      'La salsa estarà llesta quan els espaguetis ho estiguin.',
      'Si vols, afegeix una mica de formatge per sobre del plat acabat.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'Torrada Hawaiiana',
    'assequible',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    10,
    [
      '1 Llesca de Pa Blanc',
      '1 Llesca de Pernil',
      '1 Llesca de Pinya',
      '1-2 Llesques de Formatge',
      'Mantega'
    ],
    [
      'Unteu una cara del pa blanc amb mantega.',
      'Col·loca el pernil, la pinya i el formatge sobre el pa blanc.',
      'Cou el pa torrat durant uns 10 minuts al forn a 200°C.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'Hamburguesa Clàssica',
    'car',
    'simple',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    45,
    [
      '300g de Carn de Vedella Picada',
      '1 Tomàquet',
      '1 Cogombre',
      '1 Ceba',
      'Ketchup',
      "2 Panets d'Hamburguesa"
    ],
    [
      'Forma 2 hamburgueses.',
      'Fregiu les hamburgueses durant uns 4 minuts per cada costat.',
      'Fregiu ràpidament els panets durant uns 1 minut per cada costat.',
      'Unta els panets amb ketchup.',
      "Serveix l'hamburguesa amb tomàquet, cogombre i ceba."
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Schnitzel de Vedella',
    'luxós',
    'difícil',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      '8 Escalopes de Vedella',
      '4 Ous',
      '200g de Pa Rallat',
      '100g de Farina',
      '300ml de Mantega',
      "100g d'Oli Vegetal",
      'Sal',
      'Llesques de Llimona'
    ],
    [
      'Deixa la vedella fins a uns 2-4mm, i sala-la pels dos costats.',
      'En un plat pla, bat els ous breument amb una forquilla.',
      "Cobreix lleugerament les escalopes amb farina, després submergeix-les en l'ou, i finalment, arrebossa-les amb pa ratllat.",
      "Escalfa la mantega i l'oli en una paella gran (deixa que el greix s'escalfi molt) i fregeix les escalopes fins que estiguin daurades pels dos costats.",
      "Assegura't de sacsejar la paella regularment perquè les escalopes quedin envoltades d'oli i l'arrebossat es torni ‘esponjós'.",
      "Retira-les, i deixa-les escórrer sobre paper de cuina. Fregiu el julivert en l'oli restant i escorre'l.",
      'Posa les escalopes en un plat calent i serveix-les guarnides amb julivert i llesques de llimona.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    'Salad with Smoked Salmon',
    'luxós',
    'simple',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    15,
    [
      'Rúcula',
      'Canonges',
      'Julivert',
      'Fonoll',
      '200g de Salmó Fumat',
      'Mostassa',
      'Vinagre Balsàmic',
      "Oli d'Oliva",
      'Sal i Pebre'
    ],
    [
      "Renta i talla l'amanida i les herbes.",
      'Talla el salmó a daus.',
      "Prepara un amaniment amb la mostassa, el vinagre i l'oli d'oliva.",
      "Prepara l'amanida.",
      "Afegeix els daus de salmó i l'amaniment."
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Mousse de Taronja',
    'assequible',
    'difícil',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
      '4 Fulles de Gelatina',
      '150ml de Suc de Taronja',
      '80g de Sucre',
      '300g de Iogurt',
      '200g de Nata',
      'Pell de Taronja'
    ],
    [
      'Dissol la gelatina en una olla.',
      'Afegeix el suc de taronja i el sucre.',
      "Retira l'olla del foc.",
      'Afegeix 2 cullerades de iogurt.',
      'Barreja la gelatina amb el iogurt restant.',
      'Refreda tot a la nevera.',
      'Muntem la nata i la incorporem a la massa de taronja.',
      'Refreda de nou durant almenys 4 hores.',
      'Serveix amb pell de taronja.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c7'],
    'Pancakes',
    'assequible',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    20,
    [
      '1 1/2 Tasses de Farina de Tot Us',
      '3 1/2 Culleradetes de Llevat en Pols',
      '1 Culleradeta de Sal',
      '1 Cullerada de Sucre Blanc',
      '1 1/4 tasses de Llet',
      '1 Ou',
      '3 Cullerades de Mantega, fosa'
    ],
    [
      'En un bol gran, tamisa la farina, el llevat en pols, la sal i el sucre.',
      "Fes un forat al centre i aboca-hi la llet, l'ou i la mantega fosa; barreja fins que sigui suau.",
      'Escalfa una planxa o paella lleugerament oliada a foc mitjà-alt.',
      'Aboqui o posa la massa a la planxa, utilitzant aproximadament 1/4 de tassa per cada pancake. Daurar pels dos costats i servir calent.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c8'],
    'Curry Cremós de Pollastre',
    'car',
    'difícil',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
      '4 Pits de Pollastre',
      '1 Ceba',
      "2 Grans d'All",
      '1 Troç de Gingebre',
      "4 Cullerades d'Ametlles",
      '1 Culleradeta de Pebre de Caiena',
      '500ml de Llet de Coco'
    ],
    [
      'Talla i fregeix el pit de pollastre.',
      "Processa la ceba, l'all i el gingebre en una pasta i sofregeix-ho tot.",
      'Afegeix les espècies i sofregeix.',
      "Afegeix el pit de pollastre + 250ml d'aigua i cuina-ho tot durant 10 minuts.",
      'Afegeix la llet de coco.',
      'Serveix amb arròs.'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c9'],
    'Soufflé de Xocolata',
    'assequible',
    'difícil',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    45,
    [
      '1 Culleradeta de mantega fosa',
      '2 Cullerades de sucre blanc',
      '2 Unces de xocolata negra 70%, trencada en trossos',
      '1 Cullerada de mantega',
      '1 Cullerada de farina de tot ús',
      '4 1/3 cullerades de llet freda',
      '1 Pessic de sal',
      '1 Pessic de pebre de caiena',
      "1 Rovell d'ou gran",
      "2 Clares d'ou grans",
      '1 Pessic de crema de tàrtar',
      '1 Cullerada de sucre blanc'
    ],
    [
      'Preescalfeu el forn a 190°C. Folra una safata de forn amb paper de forn.',
      'Unteu lleugerament amb mantega el fons i els costats de 2 ramekins amb 1 culleradeta de mantega fosa; cobreix el fons i els costats fins a la vora.',
      'Afegeix 1 cullerada de sucre blanc als ramekins. Gira els ramekins fins que el sucre cobreixi totes les superfícies.',
      'Posa els trossos de xocolata en un bol metàl·lic.',
      "Posa el bol sobre una paella amb uns 3 tasses d'aigua calenta a foc baix.",
      "Fon 1 cullerada de mantega en una paella a foc mitjà. Empolvora-hi la farina. Bateu fins que la farina s'incorpori a la mantega i la mescla s'espesseixi.",
      "Bateu-hi la llet freda fins que la mescla es torni suau i s'espesseixi. Transfereix la mescla al bol amb la xocolata fosa.",
      "Afegeix la sal i el pebre de caiena. Barreja tot bé. Afegeix el rovell d'ou i barreja per combinar.",
      "Deixa el bol sobre l'aigua calenta (no bullint) per mantenir la xocolata calenta mentre muntes les clares d'ou.",
      "Posa 2 clares d'ou en un bol de mescla; afegeix crema de tàrtar. Bateu fins que la mescla comenci a espessir-se i un raig de la batedora es mantingui a la superfície uns 1 segons abans de desaparèixer a la mescla.",
      "Afegeix 1/3 del sucre i bateu. Afegeix una mica més de sucre després de 15 segons.",
      "Afegeix la resta del sucre. Continua batent fins que la mescla sigui tan espessa com la crema d'afaitar i formi pics suaus, uns 3 a 5 minuts.",
      "Transfereix una mica menys de la meitat de les clares d'ou a la xocolata.",
      "Barreja fins que les clares d'ou estiguin completament incorporades a la xocolata.",
      "Afegeix la resta de les clares d'ou; incorpora suaument a la xocolata amb una espàtula, aixecant des del fons i plegant.",
      "Deixa de barrejar quan les clares d'ou desapareguin. Divideix la mescla entre els 2 ramekins preparats. Col·loca els ramekins a la safata de forn preparada.",
      "Cou al forn preescalfat fins que els soufflés estiguin inflats i hagin pujat per sobre de la part superior dels ramekins, uns 12 a 15 minuts."
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    "Amanida d'Espàrrecs amb Cherry",
    'luxós',
    'simple',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      'Espàrrecs Blancs i Verds',
      '30g de Pinyons',
      '300g de Tomàquets Cherry',
      'Amanida',
      "Sal, Pebre i Oli d'Oliva"
    ],
    [
      'Renta, pela i talla els espàrrecs.',
      'Cuina en aigua salada.',
      'Sala i empolvora amb pebre els espàrrecs.',
      'Torra els pinyons.',
      'Parteix els tomàquets per la meitat.',
      "Barreja amb els espàrrecs, l'amanida i l'amaniment.",
      'Serveix amb pa.'
    ],
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm11',
    ['c8'],
    'Arròs Fregit',
    'assequible',
    'simple',
    'https://images.unsplash.com/photo-1630914441929-0d8ea69f95e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    40,
    [
      'Arròs de vasito',
      'Shiitake',
      'Pebrot verd i vermell',
      'Ceba',
      'All',
      'Ous',
      'Pastanaga',
      'Heura',
      'Salsa de soja'
    ],
    [
      "Fer verdures i shiitake molt petites i posar-les a Wok",
      "Separar les verdures i fer revoltillo d'ous",
      "Separar el revoltillo",
      "Posar vasito al microones i fer allet a wok 1 minut",
      "Barrejar arròs i all i saltejar una mica",
      "Ajuntar-ho tot i saltejar",
      "Afegir culleradeta de salsa de Soja de Sirena i Bonpreu",
      "Rajolinet molt petit d'oli de sèsam"
    ],
    true,
    false,
    true,
    true,
  ),
  new Meal(
    'm12',
    ['c10', 'c6'],
    'Paella de verdures',
    'assequible',
    'difícil',
    'https://images.unsplash.com/photo-1604543519952-12b7038886c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    60,
    [
      'Ceba',
      'Pastanaga',
      'Pebrot verd i vermell',
      'All talladet petit',
      'Heura',
      'Tomàquet en salsa',
      'Shiitake',
      'Caldo de verdures'
    ],
    [
      "tallar els ingredients",
      "Primer la ceba juntament amb la pastanaga en una paella amb oli calent",
      "Passada una estona s'afegeixen els pebrots amb els shiitake",
      "Finalment hi posem l'all",
      "Aboquem una mica de salsa de tomàquet per a fer el sofregit",
      "Podem posar una mica de sucre morè",
      "Un cop fet el sofregit hi posem el caldo i tapem 18 minuts"
    ],
    true,
    true,
    true,
    true,
  ),
];
