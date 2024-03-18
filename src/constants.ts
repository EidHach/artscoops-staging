// Add all constants you use inthis projects inside this file.

export const BASE_URL = 'https://artscoops.com/api/v1';
export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const REGIONS = [
  { id: 1, name: 'Central Asia' },
  { id: 2, name: 'Europe' },
  { id: 3, name: 'Middle East' },
  { id: 4, name: 'North Africa' },
  { id: 5, name: 'North America' },
  { id: 7, name: 'South America' },
  { id: 8, name: 'South Africa' },
  { id: 9, name: 'East Africa' },
  { id: 10, name: 'West Africa' },
  { id: 11, name: 'Central Africa' },
  { id: 12, name: 'East Asia' },
  { id: 13, name: 'South Asia' },
  { id: 14, name: 'Australia' },
];

export const COUNTRIES = [
  { id: 33, name: 'Algeria', region_id: 4 },
  { id: 34, name: 'Egypt', region_id: 4 },
  { id: 35, name: 'Libya', region_id: 4 },
  { id: 36, name: 'Morocco', region_id: 4 },
  { id: 37, name: 'Sudan', region_id: 4 },
  { id: 38, name: 'Tunisia', region_id: 4 },
  { id: 39, name: 'Bahrain', region_id: 3 },
  { id: 40, name: 'United Kingdom', region_id: 2 },
  { id: 41, name: 'Iran', region_id: 3 },
  { id: 42, name: 'Iraq', region_id: 3 },
  { id: 43, name: 'Jordan', region_id: 3 },
  { id: 44, name: 'Kuwait', region_id: 3 },
  { id: 45, name: 'Lebanon', region_id: 3 },
  { id: 46, name: 'Oman', region_id: 3 },
  { id: 47, name: 'Palestine', region_id: 3 },
  { id: 48, name: 'Qatar', region_id: 3 },
  { id: 49, name: 'Saudi Arabia', region_id: 3 },
  { id: 50, name: 'Syria', region_id: 3 },
  { id: 51, name: 'Turkey', region_id: 3 },
  { id: 52, name: 'United Arab Emirates', region_id: 3 },
  { id: 53, name: 'Yemen', region_id: 3 },
  { id: 54, name: 'Netherlands', region_id: 2 },
  { id: 55, name: 'Cyprus', region_id: 2 },
  { id: 56, name: 'Uzbekistan', region_id: 1 },
  { id: 57, name: 'France', region_id: 2 },
  { id: 58, name: 'USA', region_id: 5 },
  { id: 59, name: 'Germany', region_id: 2 },
  { id: 60, name: 'Greece', region_id: 2 },
  { id: 61, name: 'Kazakhstan', region_id: 1 },
  { id: 62, name: 'Russia', region_id: 1 },
  { id: 63, name: 'Armenia', region_id: 1 },
  { id: 64, name: 'Kyrgyzstan', region_id: 1 },
  { id: 65, name: 'Canada', region_id: 5 },
  { id: 66, name: 'Senegal', region_id: 10 },
  { id: 67, name: 'Luxembourg', region_id: 2 },
  { id: 68, name: 'Austria', region_id: 2 },
  { id: 69, name: 'Spain', region_id: 2 },
  { id: 72, name: 'Belgium', region_id: 2 },
  { id: 73, name: 'Singapore', region_id: 1 },
  { id: 74, name: 'Italy', region_id: 2 },
  { id: 75, name: 'Bolivia', region_id: 7 },
  { id: 76, name: 'Switzerland', region_id: 2 },
  { id: 77, name: 'China', region_id: 1 },
  { id: 78, name: 'Japan', region_id: 1 },
  { id: 79, name: 'Mexico', region_id: 5 },
  { id: 80, name: 'Pakistan', region_id: 13 },
  { id: 81, name: 'Hungary', region_id: 2 },
  { id: 82, name: 'Australia', region_id: 14 },
  { id: 83, name: 'Malaysia', region_id: 13 },
  { id: 84, name: 'Croatia', region_id: 2 },
  { id: 85, name: 'Portugal', region_id: 2 },
  { id: 86, name: 'Djibouti', region_id: 9 },
  { id: 87, name: 'Eritrea', region_id: 9 },
  { id: 88, name: 'Ethiopia', region_id: 9 },
  { id: 89, name: 'Kenya', region_id: 9 },
  { id: 90, name: 'Madagascar', region_id: 9 },
  { id: 91, name: 'Mozambique', region_id: 9 },
  { id: 92, name: 'Rwanda', region_id: 9 },
  { id: 93, name: ' Somalia ', region_id: 9 },
  { id: 94, name: 'Tanzania', region_id: 9 },
  { id: 95, name: 'Uganda', region_id: 9 },
  { id: 96, name: 'Zambia', region_id: 9 },
  { id: 97, name: 'Zimbabwe', region_id: 9 },
  { id: 98, name: 'Angola', region_id: 11 },
  { id: 99, name: 'Cameroon', region_id: 11 },
  { id: 100, name: 'Chad', region_id: 11 },
  { id: 101, name: 'DRC', region_id: 11 },
  { id: 102, name: 'Gabon', region_id: 11 },
  { id: 103, name: ' Burkina Faso', region_id: 10 },
  { id: 104, name: 'Gambia', region_id: 10 },
  { id: 105, name: 'Ghana', region_id: 10 },
  { id: 106, name: 'Guinea', region_id: 10 },
  { id: 107, name: 'Liberia', region_id: 10 },
  { id: 108, name: 'Mali', region_id: 10 },
  { id: 109, name: 'Mauritania', region_id: 10 },
  { id: 110, name: 'Niger', region_id: 10 },
  { id: 111, name: 'Nigeria', region_id: 10 },
  { id: 112, name: ' Sierra Leone', region_id: 10 },
  { id: 113, name: 'Botswana', region_id: 8 },
  { id: 114, name: 'Lesotho', region_id: 8 },
  { id: 115, name: 'Namibia', region_id: 8 },
  { id: 116, name: 'South Africa', region_id: 8 },
  { id: 117, name: 'India', region_id: 13 },
  { id: 118, name: 'Afghanistan', region_id: 13 },
  { id: 120, name: 'Argentina', region_id: 7 },
  { id: 121, name: 'Ivory Coast', region_id: 10 },
  { id: 122, name: 'Togo', region_id: 10 },
  { id: 123, name: 'Benin', region_id: 10 },
  { id: 124, name: 'Sweden', region_id: 2 },
  { id: 125, name: 'Denmark', region_id: 2 },
  { id: 126, name: 'Denmark', region_id: 2 },
  { id: 127, name: 'Denmark', region_id: 2 },
  { id: 128, name: 'Norway', region_id: 2 },
  { id: 129, name: 'Brazil', region_id: 7 },
  { id: 130, name: 'Belarus', region_id: 2 },
  { id: 131, name: 'Indonesia', region_id: 13 },
  { id: 132, name: 'Bosnia', region_id: 2 },
  { id: 133, name: 'Latvia', region_id: 2 },
  { id: 134, name: 'Bangladesh', region_id: 13 },
  { id: 135, name: 'South Korea', region_id: 12 },
];

export const ART_ORIENTATIONS = [
  {
    id: 11,
    name: 'Portrait',
  },
  {
    id: 12,
    name: 'Landscape',
  },
  {
    id: 13,
    name: 'Square',
  },
  {
    id: 14,
    name: 'Oversize',
  },
  {
    id: 15,
    name: 'Circle',
  },
  {
    id: 16,
    name: 'Circular',
  },
  {
    id: 17,
    name: 'pyramid',
  },
  {
    id: 18,
    name: 'cube',
  },
];
export const ART_SIGNED = [
  {
    id: 24,
    name: 'signed',
  },
  {
    id: 25,
    name: 'unsigned',
  },
  {
    id: 26,
    name: 'signed on the front',
  },
  {
    id: 27,
    name: 'signed on the reverse',
  },
  {
    id: 29,
    name: 'signed on the reverse and front',
  },
  {
    id: 30,
    name: 'signed lower right',
  },
  {
    id: 31,
    name: 'signed lower left',
  },
  {
    id: 32,
    name: 'signed upper right',
  },
  {
    id: 33,
    name: 'signed upper left',
  },
  {
    id: 34,
    name: 'signed lower center',
  },
  {
    id: 35,
    name: 'signed lower left and right',
  },
  {
    id: 37,
    name: 'signed lower back',
  },
  {
    id: 38,
    name: 'signed mid right',
  },
  {
    id: 39,
    name: 'signed left',
  },
  {
    id: 40,
    name: 'stamped signature',
  },
  {
    id: 42,
    name: "stamped by artist's estate",
  },
  {
    id: 378,
    name: 'Signed on the left',
  },
  {
    id: 379,
    name: 'Signed on the right side',
  },
  {
    id: 614,
    name: 'signed and dated',
  },
  {
    id: 1025,
    name: "signed lower right 'Jamil Molaeb'",
  },
];
export const ART_SIZES = [
  {
    id: 11,
    name: 'Small: <50cm',
  },
  {
    id: 12,
    name: 'Medium: 50 to 100cm',
  },
  {
    id: 13,
    name: 'Large: >100cm',
  },
];
export const ART_THEMES = [
  {
    id: 41,
    name: 'Abstract',
  },
  {
    id: 42,
    name: 'Geometric',
  },
  {
    id: 43,
    name: 'Landscape',
  },
  {
    id: 44,
    name: 'Cityscape',
  },
  {
    id: 45,
    name: 'Portraiture',
  },
  {
    id: 46,
    name: 'Still Life',
  },
  {
    id: 47,
    name: 'Calligraphy',
  },
  {
    id: 48,
    name: 'Figurative',
  },
  {
    id: 49,
    name: 'Pop & Street',
  },
  {
    id: 50,
    name: 'Technology',
  },
  {
    id: 53,
    name: 'Animals',
  },
  {
    id: 54,
    name: 'Surrealism',
  },
  {
    id: 55,
    name: 'Revolutions',
  },
  {
    id: 56,
    name: 'Naive Art',
  },
];

export const ART_COLORS = [
  {
    id: 57,
    name: 'red',
  },
  {
    id: 58,
    name: 'orange',
  },
  {
    id: 59,
    name: 'yellow',
  },
  {
    id: 60,
    name: 'green',
  },
  {
    id: 61,
    name: 'blue',
  },
  {
    id: 62,
    name: 'violet',
  },
  {
    id: 63,
    name: 'pink',
  },
  {
    id: 64,
    name: 'brown',
  },
  {
    id: 65,
    name: 'grey',
  },
  {
    id: 66,
    name: 'black',
  },
  {
    id: 67,
    name: 'white',
  },
  {
    id: 68,
    name: 'beige',
  },
  {
    id: 69,
    name: 'silver',
  },
  {
    id: 70,
    name: 'gold',
  },
  {
    id: 71,
    name: 'multicolor',
  },
  {
    id: 72,
    name: 'bronze',
  },
  {
    id: 73,
    name: 'purple',
  },
];

export const ART_FRAMED = [
  {
    id: 33,
    name: 'Framed',
  },
  {
    id: 34,
    name: 'Unframed',
  },
  {
    id: 35,
    name: 'Stretched',
  },
  {
    id: 36,
    name: 'On wood frame',
  },
  {
    id: 37,
    name: 'Mounted on wood frame',
  },
  {
    id: 38,
    name: 'Mounted on wood frame. Can be unmounted ',
  },
  {
    id: 39,
    name: 'Framed with diasec',
  },
  {
    id: 40,
    name: 'Rolled',
  },
  {
    id: 41,
    name: 'Diptych in wooden frame',
  },
  {
    id: 42,
    name: 'Unstretshed',
  },
  {
    id: 43,
    name: 'Mounted',
  },
  {
    id: 44,
    name: 'Canvas is unstretshed and unframed',
  },
  {
    id: 45,
    name: 'Rolled, unstretched and unframed',
  },
  {
    id: 46,
    name: 'Framed dark brown double frame',
  },
  {
    id: 47,
    name: 'framed with American box ',
  },
  {
    id: 48,
    name: 'Unstretched',
  },
];

export const ART_CATEGORIES = [
  {
    id: 93,
    name: 'Painting',
  },
  {
    id: 94,
    name: 'Photography',
  },
  {
    id: 95,
    name: 'Mixed Media',
  },
  {
    id: 96,
    name: 'Sculpture',
  },
  {
    id: 101,
    name: 'Work on Paper',
  },
  {
    id: 104,
    name: 'Print',
  },
  {
    id: 105,
    name: 'Collage',
  },
  {
    id: 110,
    name: 'Installation',
  },
  {
    id: 111,
    name: 'Tapestry',
  },
  {
    id: 140,
    name: 'Decorative Arts',
  },
  {
    id: 142,
    name: 'Embroidery',
  },
  {
    id: 143,
    name: 'Digital Art',
  },
];

export const ART_DESCRIPTIONS = [
  {
    id: 673,
    name: 'acrylic on canvas',
  },
  {
    id: 674,
    name: 'Acrylic on photo paper',
  },
  {
    id: 675,
    name: 'oil on canvas',
  },
  {
    id: 676,
    name: 'Oil on wood',
  },
  {
    id: 677,
    name: 'Oil on paper',
  },
  {
    id: 678,
    name: 'Oil on paper mounted on board',
  },
  {
    id: 679,
    name: 'mixed media on canvas',
  },
  {
    id: 680,
    name: 'Ink on cardboard',
  },
  {
    id: 681,
    name: 'Ink on paper',
  },
  {
    id: 682,
    name: 'ink and watercolour',
  },
  {
    id: 683,
    name: 'Inkjet Print',
  },
  {
    id: 684,
    name: 'Gilded Print on canvas',
  },
  {
    id: 685,
    name: 'Gelatin Print',
  },
  {
    id: 686,
    name: 'Printed on 100% cotton paper',
  },
  {
    id: 687,
    name: 'Gouache',
  },
  {
    id: 688,
    name: 'gouache on paper',
  },
  {
    id: 689,
    name: 'charcoal on paper',
  },
  {
    id: 690,
    name: 'charcoal on cardboard',
  },
  {
    id: 691,
    name: 'acrylic on wood',
  },
  {
    id: 692,
    name: 'Acrylic, digital print, aluminium, cooper and photographs on plywood panel',
  },
  {
    id: 693,
    name: 'Giclée digital print',
  },
  {
    id: 694,
    name: 'Lithography and silkscreen',
  },
  {
    id: 695,
    name: 'Gouache, transfer and collage on paper',
  },
  {
    id: 696,
    name: 'Screen printing',
  },
  {
    id: 697,
    name: 'Mixed batik on cloth',
  },
  {
    id: 698,
    name: 'acrylic on paper',
  },
  {
    id: 699,
    name: 'mixed media on paper',
  },
  {
    id: 700,
    name: 'Mixed media on wood',
  },
  {
    id: 701,
    name: 'Digital print on transparent film burnt and enclosed in plexiglass boxes',
  },
  {
    id: 702,
    name: 'Chrome',
  },
  {
    id: 703,
    name: 'Giclée Epson UltraChrome K3 print on Hahnemuhle Baryta FB 350gsm',
  },
  {
    id: 704,
    name: 'Lambda print',
  },
  {
    id: 705,
    name: 'Printed on cotton rag fine art archival paper',
  },
  {
    id: 706,
    name: 'Digital print and silkscreen on cotton paper 300g',
  },
  {
    id: 707,
    name: 'Lithograph',
  },
  {
    id: 708,
    name: 'Mixed media on plexiglas',
  },
  {
    id: 709,
    name: 'Tempera and pen on paper',
  },
  {
    id: 710,
    name: 'Mixed media on wood and plexiglas',
  },
  {
    id: 711,
    name: 'Hahnemuhle photo rag',
  },
  {
    id: 712,
    name: 'Innova smooth cotton',
  },
  {
    id: 713,
    name: 'Gelatin silver print',
  },
  {
    id: 714,
    name: 'Photography mounted on aluminium',
  },
  {
    id: 715,
    name: 'Photograph printed on ultra smooth paper',
  },
  {
    id: 716,
    name: 'Printed on Barite paper. Mounting on aluminium with match box.',
  },
  {
    id: 717,
    name: 'Hand stamping with ink on Fabiano paper.',
  },
  {
    id: 718,
    name: 'Acrylic and inkjet on canvas.',
  },
  {
    id: 719,
    name: 'Fur and mixed media',
  },
  {
    id: 720,
    name: 'Mixed media and collage on paper',
  },
  {
    id: 721,
    name: 'Lambda print on Hahnemuhle photo pearl paper 310g',
  },
  {
    id: 722,
    name: 'Silkscreen on Canvas',
  },
  {
    id: 723,
    name: 'Digital pigment print',
  },
  {
    id: 724,
    name: 'etching',
  },
  {
    id: 725,
    name: 'Mixed media on rice paper',
  },
  {
    id: 726,
    name: 'Metal',
  },
  {
    id: 727,
    name: 'VHS',
  },
  {
    id: 728,
    name: 'Silkscreen and acrylic on paper mounted on canvas',
  },
  {
    id: 729,
    name: 'oil on board',
  },
  {
    id: 730,
    name: 'Oil on fabric',
  },
  {
    id: 731,
    name: 'Oil on cardboard',
  },
  {
    id: 732,
    name: 'Watercolour, digital print and ink on water-colour paper',
  },
  {
    id: 733,
    name: 'UltraChrome K3 digigraphie on 115gr/m2 Epson paper',
  },
  {
    id: 734,
    name: 'Chinese ink on rice paper',
  },
  {
    id: 735,
    name: 'Bronze',
  },
  {
    id: 736,
    name: 'Oil, acrylic, digital print, mixed media and assemblage on plywood panel.',
  },
  {
    id: 737,
    name: 'C-Type photo prints and plexicollage diasec. ',
  },
  {
    id: 738,
    name: 'Cibachrome print laminated on 1mm aluminium plate',
  },
  {
    id: 739,
    name: 'Fiber-based silver print',
  },
  {
    id: 740,
    name: 'C-Print',
  },
  {
    id: 741,
    name: 'Silkscreen on Plexiglas',
  },
  {
    id: 742,
    name: 'mixed media on cardboard',
  },
  {
    id: 743,
    name: 'Acrylic on cardboard',
  },
  {
    id: 744,
    name: 'Woodcut print',
  },
  {
    id: 745,
    name: 'Fire and acrylic on canvas',
  },
  {
    id: 746,
    name: 'Acrylic and neon on canvas',
  },
  {
    id: 747,
    name: 'Acrylic, pigment and metal leaf on wood',
  },
  {
    id: 748,
    name: 'Watercolour and metal leaf on paper',
  },
  {
    id: 749,
    name: 'Acrylic and metal leaf on paper',
  },
  {
    id: 750,
    name: 'Silver print on Baryta paper',
  },
  {
    id: 751,
    name: 'Wood, neon and plexiglas',
  },
  {
    id: 752,
    name: 'Oil on canvas and board',
  },
  {
    id: 753,
    name: 'mixed media and oil on canvas',
  },
  {
    id: 754,
    name: 'Silkscreen on paper',
  },
  {
    id: 755,
    name: 'Giclée on canvas',
  },
  {
    id: 756,
    name: 'Dry Point and Aqua Tint',
  },
  {
    id: 757,
    name: 'Dry Point',
  },
  {
    id: 758,
    name: 'Monotype',
  },
  {
    id: 759,
    name: 'Engraving',
  },
  {
    id: 760,
    name: 'Oil collage on board',
  },
  {
    id: 761,
    name: 'Mixed media on chinese paper on canvas',
  },
  {
    id: 762,
    name: ' Inkjet Digital pigment on fine art paper',
  },
  {
    id: 763,
    name: 'Mixed Media on rice paper on canvas',
  },
  {
    id: 765,
    name: 'photography and mixed media on canvas  ',
  },
  {
    id: 766,
    name: 'Cotton thread',
  },
  {
    id: 767,
    name: 'Collage on board',
  },
  {
    id: 768,
    name: 'Photomontage ',
  },
  {
    id: 769,
    name: 'Printed on photo paper behind plexiglass',
  },
  {
    id: 770,
    name: 'Mixed media on fabric',
  },
  {
    id: 772,
    name: 'Drawings on paper',
  },
  {
    id: 773,
    name: 'Ink and acrylic on cardboard',
  },
  {
    id: 774,
    name: 'Printed on Hahnemuhle Fine Art Rice Paper  ',
  },
  {
    id: 775,
    name: 'Printed on fine art pearl archival paper ',
  },
  {
    id: 776,
    name: 'Inkjet print on canvas',
  },
  {
    id: 777,
    name: 'Acrylic, interference colours and metal leaf on paper, cut and assembled on canvas',
  },
  {
    id: 778,
    name: 'Stainless steel, laser-cut, and acrylic on mount board, assembled on wood ',
  },
  {
    id: 779,
    name: 'Acrylic on wood, laser-cut, hand-assembled, painted and varnished',
  },
  {
    id: 780,
    name: 'Acrylic sand and charcoal on canvas',
  },
  {
    id: 781,
    name: 'Acrylic and charcoal on canvas',
  },
  {
    id: 782,
    name: 'Acrylic and gold colour on Canvas',
  },
  {
    id: 783,
    name: 'Powder coating aint on aluminum',
  },
  {
    id: 784,
    name: 'Wood and mosaic tessellations',
  },
  {
    id: 785,
    name: 'Pigments and oil on canvas',
  },
  {
    id: 786,
    name: 'Oil on canvas silver sheets paper',
  },
  {
    id: 787,
    name: 'Digitally woven images',
  },
  {
    id: 788,
    name: 'White Italian Biancopi marble',
  },
  {
    id: 789,
    name: 'White Italian Biancopi marble on a black granite base',
  },
  {
    id: 790,
    name: 'Acrylic on Rose Wood',
  },
  {
    id: 791,
    name: 'Oil & Mixed media on canvas',
  },
  {
    id: 792,
    name: 'Digital print on paper in a glass box',
  },
  {
    id: 793,
    name: 'Wall installation,canvas, third, taxidermy black butterfly in wooden glass box',
  },
  {
    id: 794,
    name: 'Many  layers of burnt canvas and oil colour on canvas',
  },
  {
    id: 795,
    name: 'Four sets from 14 sets of Hoopoes ink drawing + digital print on paper in a glass box',
  },
  {
    id: 796,
    name: 'Archival inkjet on fine art paper',
  },
  {
    id: 797,
    name: 'Fine art paper print',
  },
  {
    id: 798,
    name: 'Acrylic on linen',
  },
  {
    id: 799,
    name: 'collage (Silkscreen, print, fabric) and Acrylic',
  },
  {
    id: 800,
    name: 'Limited giclée print',
  },
  {
    id: 801,
    name: 'silkscreen print',
  },
  {
    id: 802,
    name: 'Giclée print',
  },
  {
    id: 803,
    name: 'Airbrushed acrylics on canvas',
  },
  {
    id: 804,
    name: 'Stainless Steel Coated',
  },
  {
    id: 805,
    name: 'Ceramic',
  },
  {
    id: 806,
    name: 'Monotype print on Arches 88 archival paper',
  },
  {
    id: 807,
    name: 'Acrylic and LED lights installation ',
  },
  {
    id: 808,
    name: 'Stoneware and gold lustre',
  },
  {
    id: 809,
    name: 'Porcelaine Scarf Head',
  },
  {
    id: 810,
    name: 'White stoneware clay and black slip with outer wooden cubes ',
  },
  {
    id: 811,
    name: 'Oil on canvas with natural pigments',
  },
  {
    id: 812,
    name: 'Indian ink on paper',
  },
  {
    id: 813,
    name: 'Acrylic, Stones and Shells, Oil colour',
  },
  {
    id: 814,
    name: 'Acrylic, oil and pieces of wood',
  },
  {
    id: 815,
    name: 'Acrylic and intervention on paper',
  },
  {
    id: 816,
    name: 'Stone lithograph print',
  },
  {
    id: 817,
    name: 'Polymer print',
  },
  {
    id: 818,
    name: 'Mixed Media on  Flour Bag ',
  },
  {
    id: 819,
    name: 'Ink on Canvas',
  },
  {
    id: 820,
    name: 'Acrylic and Collage on canvas',
  },
  {
    id: 821,
    name: 'Acrylic and Oil, Stones and Shells',
  },
  {
    id: 822,
    name: 'Oil & Natural Pigment on Canvas',
  },
  {
    id: 823,
    name: 'Acrylic on canvas, stones and shells, oil colour',
  },
  {
    id: 824,
    name: 'Acrylic, shells, stones and palm fond, oil colour',
  },
  {
    id: 825,
    name: 'Watercolour on paper',
  },
  {
    id: 826,
    name: 'Led plexi lightbox, charcoal on plexi',
  },
  {
    id: 827,
    name: 'Pastel on canvas',
  },
  {
    id: 828,
    name: 'Acrylic on jute',
  },
  {
    id: 829,
    name: 'Archival pigment print on photo rag paper',
  },
  {
    id: 830,
    name: 'Acrylic and giclée on canvas',
  },
  {
    id: 831,
    name: 'Oil on canvas wrapped panel',
  },
  {
    id: 832,
    name: 'Acrylics  and Metal Leaf on Canvas',
  },
  {
    id: 833,
    name: 'Bamboo , Plaster , Gesso , Glue , Gauze  paper and Plastic ',
  },
  {
    id: 834,
    name: 'Acrylic and ink on paper',
  },
  {
    id: 835,
    name: 'Mineral and natural pigments in acrylic binder-gold leaf 23.75 ct-silver leaf-shell gold and shell-palladium on wood',
  },
  {
    id: 836,
    name: 'Acrylic on paper, hand cut, scored, folded, assembled on canvas',
  },
  {
    id: 837,
    name: 'Papier maché',
  },
  {
    id: 838,
    name: 'Acrylic and mirror fragments on board',
  },
  {
    id: 839,
    name: 'Ink acrylic and collage on paper',
  },
  {
    id: 840,
    name: 'Ink acrylic and natural hand made colour on paper   ',
  },
  {
    id: 841,
    name: 'Ultra chrome ink print on canvas',
  },
  {
    id: 842,
    name: 'Acrylic and mirror on board',
  },
  {
    id: 843,
    name: 'Archival pigment print',
  },
  {
    id: 844,
    name: 'Acrylic ink on canvas',
  },
  {
    id: 845,
    name: 'Gouache on board',
  },
  {
    id: 846,
    name: 'Gouache and ink on board',
  },
  {
    id: 847,
    name: 'Acrylic and metal leaf on paper, hand-cut and assembled on matte board',
  },
  {
    id: 848,
    name: 'Tempera, natural oxides, gold leaf on canvas',
  },
  {
    id: 849,
    name: 'Tempera, natural oxides, gold leaf under paint on treated wood',
  },
  {
    id: 850,
    name: 'Oil, gold leaf on canvas',
  },
  {
    id: 851,
    name: 'Oil, tempera, gold leaf on treated wood',
  },
  {
    id: 852,
    name: 'Oil on pressed wood',
  },
  {
    id: 853,
    name: 'Charcoal and acrylic on canvas',
  },
  {
    id: 854,
    name: 'Engraving on Hahnemuller-Durer etching paper',
  },
  {
    id: 855,
    name: 'Etching with softground and sugar lift on paper',
  },
  {
    id: 856,
    name: 'Bronze and coloured patina',
  },
  {
    id: 857,
    name: 'Metal, Papier maché, paint and wood',
  },
  {
    id: 858,
    name: 'Mixed media and collage on canvas',
  },
  {
    id: 859,
    name: 'Bronze, plywood and stainless steel base',
  },
  {
    id: 860,
    name: 'Resin, mirrored stainless steel base',
  },
  {
    id: 861,
    name: 'Brass, mirrored stainless steel base',
  },
  {
    id: 862,
    name: 'Resin, automotive paint',
  },
  {
    id: 863,
    name: 'Bronze, gold plated brass, mirrored stainless steel base',
  },
  {
    id: 864,
    name: 'Foam, latex, acrylic paint, marker-paper, canvas',
  },
  {
    id: 865,
    name: 'Crayon, oil pastel, marker, watercolour, acrylic paint and collage on paper in different frames',
  },
  {
    id: 866,
    name: 'Crayon, marker and acrylic paint on paper',
  },
  {
    id: 867,
    name: 'Oil and collage on canvas',
  },
  {
    id: 868,
    name: 'Oil and resin  under glass',
  },
  {
    id: 869,
    name: 'Oil and marker on canvas',
  },
  {
    id: 870,
    name: 'Acrylic and dry pastel',
  },
  {
    id: 871,
    name: 'Aluminium, MDF and Plexiglas',
  },
  {
    id: 872,
    name: 'Stone',
  },
  {
    id: 873,
    name: 'sculpture',
  },
  {
    id: 874,
    name: 'Collage and acrylics on canvas ',
  },
  {
    id: 875,
    name: ' Ink and Mixed Media on Rice Paper ',
  },
  {
    id: 876,
    name: 'Ink and Mixed Media on Rice Paper ',
  },
  {
    id: 877,
    name: 'Ink on Rice Paper ',
  },
  {
    id: 878,
    name: 'Collage and acrylic on wood',
  },
  {
    id: 879,
    name: 'Acid Free Markers',
  },
  {
    id: 880,
    name: 'Oil paint on white hard board',
  },
  {
    id: 881,
    name: 'Acrylic, golden leaves, scratched by nails on canvas',
  },
  {
    id: 882,
    name: 'Acrylic, threads, gold leaves on canvas ',
  },
  {
    id: 883,
    name: 'Acrylic, Borage tea colour, golden leaves, ink and pencil',
  },
  {
    id: 884,
    name: 'Acrylic, ink, pen, golden leaves, scratched by nails on canvas',
  },
  {
    id: 885,
    name: 'Acrylic, gold leaves on canvas ',
  },
  {
    id: 886,
    name: 'Tapestry',
  },
  {
    id: 887,
    name: 'Chi technique in silk and mixed media',
  },
  {
    id: 888,
    name: 'Monoprint coloured pencil on paper',
  },
  {
    id: 889,
    name: 'Ink & Gold Leaf on Canvas ',
  },
  {
    id: 890,
    name: 'Acrylic and Gold Leaf on Canvas ',
  },
  {
    id: 891,
    name: 'Mixed Media on 300gr Fabriano Paper ',
  },
  {
    id: 892,
    name: 'Ink, Acrylic and Liquid Bronsez Varnish on Paper ',
  },
  {
    id: 893,
    name: 'Wood Installation',
  },
  {
    id: 894,
    name: 'Plexi installation on wood',
  },
  {
    id: 895,
    name: 'Gouache on canvas',
  },
  {
    id: 896,
    name: 'acrylic and mixed media on canvas',
  },
  {
    id: 897,
    name: 'NDF wood and gold leaf',
  },
  {
    id: 898,
    name: 'Watercolour and oil on canvas',
  },
  {
    id: 899,
    name: 'Mixed media on card box',
  },
  {
    id: 900,
    name: 'Gold sheet on canvas ',
  },
  {
    id: 901,
    name: 'Acrylic and ink on canvas',
  },
  {
    id: 902,
    name: 'Acrylic and Gold leaf on paper',
  },
  {
    id: 903,
    name: 'Steel and Plexi Glass',
  },
  {
    id: 904,
    name: 'Acrylic and ink on canvas in light box',
  },
  {
    id: 905,
    name: 'Callicollage',
  },
  {
    id: 906,
    name: 'Acrylic/Spray on canvas',
  },
  {
    id: 907,
    name: 'Oil, gold leaf and Acrylic on canvas',
  },
  {
    id: 908,
    name: ' Acrylic print on Plexiglass mounted on Aluminium debond.',
  },
  {
    id: 909,
    name: 'Wood Panel engraved with translucent Colours',
  },
  {
    id: 910,
    name: 'Acrylic on canvas and shooting with paintball',
  },
  {
    id: 911,
    name: 'Drawing with light',
  },
  {
    id: 912,
    name: 'Pigments, Acrylic, Digital Art layered on Super 8mm Print, Laminated Canvas Marouflé on Dibond.',
  },
  {
    id: 913,
    name: 'pastel on paper',
  },
  {
    id: 914,
    name: 'Spray on paper on canvas',
  },
  {
    id: 915,
    name: 'Henna on paper on canvas',
  },
  {
    id: 916,
    name: 'Oil painting and fabrics on canvas',
  },
  {
    id: 917,
    name: 'Acrylic, Enamel and Resin on Aluminum',
  },
  {
    id: 918,
    name: 'Oil and resin under glass',
  },
  {
    id: 921,
    name: 'Indian ink and watercolour on archive paper',
  },
  {
    id: 922,
    name: 'Acrylic and pastel on canvas',
  },
  {
    id: 923,
    name: 'Smalto , Acrylic and Black Pencil drawn on book paper',
  },
  {
    id: 924,
    name: 'Charcoal and pastel on paper',
  },
  {
    id: 925,
    name: 'Oil charcoal on canvas ',
  },
  {
    id: 926,
    name: 'Glossy paper, diasec-mounted',
  },
  {
    id: 927,
    name: 'Acrylic, ink and collage on paper',
  },
  {
    id: 928,
    name: 'Natural sands on canvas ',
  },
  {
    id: 929,
    name: 'Polyester',
  },
  {
    id: 930,
    name: 'Oil and special paper peeling technique on canvas',
  },
  {
    id: 931,
    name: 'Plaster',
  },
  {
    id: 932,
    name: 'Ink on watercolour paper',
  },
  {
    id: 933,
    name: 'Ink and acrylic on watercolour paper',
  },
  {
    id: 934,
    name: 'Pencil and pastel on paper',
  },
  {
    id: 935,
    name: 'Digital photomontage',
  },
  {
    id: 936,
    name: 'Photography & Computer Graphics ',
  },
  {
    id: 937,
    name: 'Acrylic and gold leaf on paper, hand-cut, assembled on mount board',
  },
  {
    id: 938,
    name: 'Acrylic and pigment on cut paper and wood',
  },
  {
    id: 939,
    name: 'Oil and charcoal on canvas',
  },
  {
    id: 940,
    name: 'Resin',
  },
  {
    id: 941,
    name: 'oil paint and resin on canvas',
  },
  {
    id: 942,
    name: 'ChromaLuxe metal print',
  },
  {
    id: 943,
    name: 'Canvas print',
  },
  {
    id: 944,
    name: 'Bronze on wood ',
  },
  {
    id: 945,
    name: 'Pen on paper ',
  },
  {
    id: 946,
    name: 'Watercolour on saunders paper',
  },
  {
    id: 947,
    name: 'Oil on C-print',
  },
  {
    id: 948,
    name: 'Oil on Inkjet print',
  },
  {
    id: 949,
    name: 'B&W print on paper',
  },
  {
    id: 950,
    name: 'Screenprint',
  },
  {
    id: 951,
    name: 'Diptych, oil on canvas',
  },
  {
    id: 952,
    name: 'Colour pencil on wood board',
  },
  {
    id: 953,
    name: 'Oil on 250 laminated paper',
  },
  {
    id: 954,
    name: 'Offset ink on 250g laminated paper',
  },
  {
    id: 955,
    name: 'Mixed media on wooden panel',
  },
  {
    id: 956,
    name: 'Poster, professional photo paper stretched on wood board',
  },
  {
    id: 957,
    name: 'pencil on paper',
  },
  {
    id: 958,
    name: 'acrylic and oil on canvas',
  },
  {
    id: 959,
    name: 'Acrylic and oil cardboard',
  },
  {
    id: 960,
    name: ' Giclée print on paper',
  },
  {
    id: 961,
    name: 'Archival face-mount on dibond',
  },
  {
    id: 962,
    name: 'Archival print on brushed aluminum',
  },
  {
    id: 963,
    name: 'Archival print',
  },
  {
    id: 964,
    name: 'Archival print on stainless steel',
  },
  {
    id: 965,
    name: 'Photographic print',
  },
  {
    id: 966,
    name: 'Acrylic and multimedia on plank',
  },
  {
    id: 967,
    name: 'Wood panel engraved with translucent colours ',
  },
  {
    id: 968,
    name: 'Hibiscus flower tea, ink and gold leaves on paper',
  },
  {
    id: 969,
    name: 'Saffron, Hibiscus tea, ink and gold leaves on pure silk ',
  },
  {
    id: 970,
    name: 'Professional photo paper stretched on aluminium',
  },
  {
    id: 971,
    name: 'Saffron, ink and gold leaves on canvas',
  },
  {
    id: 972,
    name: 'Poster, professional photo paper stretched on aluminium ',
  },
  {
    id: 973,
    name: 'Saffron, indigo, pomegranate husk, aloe vera on cotton',
  },
  {
    id: 974,
    name: 'Hibiscus aloe, ink and gold leaves on pure cotton',
  },
  {
    id: 975,
    name: 'Leaf',
  },
  {
    id: 976,
    name: 'Sculptural drawing with Arabic calligraphy, silkscreen and watercolour on paper',
  },
  {
    id: 977,
    name: 'Premium Luster Photo Paper',
  },
  {
    id: 978,
    name: 'Stainless steel',
  },
  {
    id: 979,
    name: 'Marble',
  },
  {
    id: 980,
    name: 'Cherry wood',
  },
  {
    id: 982,
    name: 'Oil on linen',
  },
  {
    id: 983,
    name: 'Poster printed on paper',
  },
  {
    id: 984,
    name: 'Print ',
  },
  {
    id: 985,
    name: 'mixed media',
  },
  {
    id: 986,
    name: 'Watercolour and acrylic on cotton paper',
  },
  {
    id: 987,
    name: 'acrylic on cotton paper',
  },
  {
    id: 988,
    name: 'Tempera, beeswax, gold leaf on wood',
  },
  {
    id: 989,
    name: 'Sculpture made of iron',
  },
  {
    id: 990,
    name: 'Acrylic on board',
  },
  {
    id: 991,
    name: 'Oil and pencil on canvas',
  },
  {
    id: 993,
    name: 'Oil on hard paper',
  },
  {
    id: 994,
    name: 'Poster',
  },
  {
    id: 995,
    name: 'Film Poster',
  },
  {
    id: 996,
    name: 'Tempera on paper',
  },
  {
    id: 997,
    name: 'pastel on canson paper',
  },
  {
    id: 998,
    name: 'Enamel paint on canvas',
  },
  {
    id: 999,
    name: 'Colour pencils on paper',
  },
  {
    id: 1000,
    name: 'Aerosol on thin canvas',
  },
  {
    id: 1001,
    name: 'Acrylic on thick canvas',
  },
  {
    id: 1002,
    name: 'Marker on carton',
  },
  {
    id: 1003,
    name: 'Brushes spray paint on paper',
  },
  {
    id: 1004,
    name: 'Acrylic and collage on board',
  },
  {
    id: 1005,
    name: 'Acrylic and collage on canvas marouflaged on hardboard',
  },
  {
    id: 1006,
    name: 'Acrylic and collage on hardboard',
  },
  {
    id: 1007,
    name: 'Powder coated steel',
  },
  {
    id: 1008,
    name: 'Sculpture made of bronze and aluminium',
  },
  {
    id: 1009,
    name: '3D print Mixed Media',
  },
  {
    id: 1010,
    name: 'Acrylic and ink on collages made with old newspapers, magazines and found objects',
  },
  {
    id: 1011,
    name: 'Acrylic and collages made with magazines',
  },
  {
    id: 1012,
    name: 'Steel installation',
  },
  {
    id: 1013,
    name: 'Stainless and yellow copper',
  },
  {
    id: 1014,
    name: 'Resine installation',
  },
  {
    id: 1015,
    name: 'Steel installation with wood, stainless and mirror',
  },
  {
    id: 1017,
    name: 'Mixed media and fabric',
  },
  {
    id: 1018,
    name: 'Spray paint and acrylic markers on canvas',
  },
  {
    id: 1019,
    name: 'Acrylic, collage and gold leaf on canvas',
  },
  {
    id: 1020,
    name: 'Acrylic, collage and pastel on canvas',
  },
  {
    id: 1021,
    name: 'Acrylic, pastel and gold leaf on canvas',
  },
  {
    id: 1022,
    name: 'Watercolour on cardboard',
  },
  {
    id: 1023,
    name: 'Photography',
  },
  {
    id: 1024,
    name: 'Oil and mixed media on wood panel',
  },
  {
    id: 1025,
    name: 'Acrylic street markers on fabric.',
  },
  {
    id: 1026,
    name: 'Ink and glue on paper',
  },
  {
    id: 1027,
    name: 'Metal enclosed in plexiglass',
  },
  {
    id: 1028,
    name: 'Mixed technique',
  },
  {
    id: 1029,
    name: 'Acrylic, crayon and collage on paper',
  },
  {
    id: 1030,
    name: 'Foam, plastic, fabric, rial notes, mirrors, armor and western brands',
  },
  {
    id: 1031,
    name: 'Crayon and collage on paper',
  },
  {
    id: 1032,
    name: 'Printed on aluminium dibond with aluminium hangers',
  },
  {
    id: 1033,
    name: 'Printed on aluminium dibond with golden italian frame',
  },
  {
    id: 1034,
    name: 'Printed on aluminium dibond with italian dark brown carved frame',
  },
  {
    id: 1035,
    name: 'Printed on aluminium dibond with silver italian frame',
  },
  {
    id: 1036,
    name: 'Printed on aluminium dibond with golden frames and led light',
  },
  {
    id: 1037,
    name: 'Printed on aluminium dibond with led light',
  },
  {
    id: 1038,
    name: 'Acrylic and silkscreen on canvas',
  },
  {
    id: 1039,
    name: 'Acrylic on panel',
  },
  {
    id: 1040,
    name: 'Egg tempera and gold leaf on wood',
  },
  {
    id: 1041,
    name: 'Oil and gold leaf on canvas',
  },
  {
    id: 1042,
    name: 'Acrylic and gold leaf on wood',
  },
  {
    id: 1043,
    name: 'Print on vinyl',
  },
  {
    id: 1044,
    name: 'Ash wood',
  },
  {
    id: 1045,
    name: 'Patinated oak wood',
  },
  {
    id: 1046,
    name: 'Carrara marble',
  },
  {
    id: 1047,
    name: 'Wood',
  },
  {
    id: 1048,
    name: 'Oak',
  },
  {
    id: 1049,
    name: 'Digital art',
  },
  {
    id: 1050,
    name: 'Henna on canvas',
  },
  {
    id: 1051,
    name: 'Print on canvas',
  },
  {
    id: 1052,
    name: 'Pigment, acrylic and wallpaint on canvas',
  },
  {
    id: 1053,
    name: 'Felt pen on cardboard',
  },
  {
    id: 1054,
    name: 'Handmade paper',
  },
  {
    id: 1055,
    name: 'Archival print mounted on aluminium',
  },
  {
    id: 1056,
    name: 'C-print',
  },
  {
    id: 1057,
    name: 'Slate',
  },
  {
    id: 1058,
    name: 'Pedestal marble and bronze',
  },
  {
    id: 1059,
    name: 'Cherry marble and bronze',
  },
  {
    id: 1060,
    name: 'Marble, bronze and silver coated pearl',
  },
  {
    id: 1061,
    name: 'Mixed media embroidery',
  },
  {
    id: 1062,
    name: 'Print on paper',
  },
  {
    id: 1063,
    name: 'Lithography and acrylic on paper',
  },
  {
    id: 1064,
    name: 'lithography',
  },
  {
    id: 1065,
    name: 'Photograph collage',
  },
  {
    id: 1066,
    name: 'Lithography on paper',
  },
  {
    id: 1067,
    name: 'Pigment, acrylic, oil and pastel on Berber tent fabric',
  },
  {
    id: 1068,
    name: 'Pigment, acrylic, oil and pastel on nylon',
  },
  {
    id: 1069,
    name: 'Glicée print on paper',
  },
  {
    id: 1070,
    name: 'Archival pigment inks on canvas',
  },
  {
    id: 1071,
    name: 'Archival pigment double print on photo rag and Japanese tissue',
  },
  {
    id: 1072,
    name: 'Ink on goatskin',
  },
  {
    id: 1073,
    name: 'Acrylic and coal on canvas',
  },
  {
    id: 1074,
    name: 'Acrylic and pencil on canvas',
  },
  {
    id: 1075,
    name: 'Duratrans in LED light box',
  },
  {
    id: 1076,
    name: 'Embroidery on paper',
  },
  {
    id: 1077,
    name: 'Perforated paper',
  },
  {
    id: 1078,
    name: 'Diamond yellow gold disk motif clip-back stud earrings',
  },
  {
    id: 1079,
    name: 'Vintage multicolour Gripoix clip earrings',
  },
  {
    id: 1080,
    name: 'Gold toned CC rings bracelet',
  },
  {
    id: 1081,
    name: 'Gold toned CC rings bracelet and gold toned vintage dangling earrings',
  },
  {
    id: 1082,
    name: 'Gold vintage bracelet with all the Chanel symbols',
  },
  {
    id: 1083,
    name: 'Chanel chain link pearl long drop drape evening necklace. Metal faux pearl gold tone hardware Lobster closure.',
  },
  {
    id: 1084,
    name: 'Vintage Chanel round clip-on earrings in gilded metal and pearl.',
  },
  {
    id: 1085,
    name: 'Chanel vintage gold black Enamel evening charm stud earrings metal gold tone Enamel clip on closure',
  },
  {
    id: 1086,
    name: 'Gripoix glass gold tone brooch pin with central pearl and surrounding rhinestones',
  },
  {
    id: 1087,
    name: 'Gold toned vintage heart brooch pin',
  },
  {
    id: 1088,
    name: 'Poured glass red and green beaded necklace with Gripoix Brooch',
  },
  {
    id: 1089,
    name: 'Gold toned chain Sautoir necklace with medallion and cluster of crystal rhinestones',
  },
  {
    id: 1090,
    name: 'Charm medallion gold and nacre',
  },
  {
    id: 1091,
    name: 'Vintage pearl and gold plated motif embedded pearls necklace',
  },
  {
    id: 1092,
    name: 'Chanel 2.55 quilted bag motif earrings',
  },
  {
    id: 1093,
    name: 'Chanel classic vintage gold tone quilted and chain clip-on earrings with CC monogram.',
  },
  {
    id: 1094,
    name: 'Authentic Chanel vintage CC logos button earrings gold clip-on',
  },
  {
    id: 1095,
    name: 'Chanel vintage hard to find iconic necklace featuring a massive wooden heart pendant with CC logo. The chain is made of bold gold toned and carved wood links.  Hook closure.',
  },
  {
    id: 1096,
    name: 'Watercolour on canvas',
  },
  {
    id: 1097,
    name: 'Acrylic on foam board',
  },
  {
    id: 1099,
    name: 'Oil and fabrics on canvas',
  },
  {
    id: 1100,
    name: 'Watercolour and pencil on paper',
  },
  {
    id: 1101,
    name: 'Oil on paper mounted on panel',
  },
  {
    id: 1102,
    name: 'Crayons on paper',
  },
  {
    id: 1103,
    name: 'Acrylic paint, ink and markers on collages made with old newspapers, magazines and found objects',
  },
  {
    id: 1104,
    name: 'Acrylic, mixed media and metal on wood ',
  },
  {
    id: 1105,
    name: 'Steel installation and the bubbles made in resine',
  },
  {
    id: 1106,
    name: 'Enamel on canvas',
  },
  {
    id: 1107,
    name: 'Acrylic, pastel, ink, pencil and collage on canvas',
  },
  {
    id: 1108,
    name: 'Pen, acrylic, stencils, collage and mixed media on canvas',
  },
  {
    id: 1109,
    name: 'Inkjet on archival paper',
  },
  {
    id: 1110,
    name: 'Gelatin silver print on baryta paper mounted on aluminium 1 mm',
  },
  {
    id: 1111,
    name: 'Chromogenic print',
  },
  {
    id: 1112,
    name: 'Graphic- Canvas on wood',
  },
  {
    id: 1113,
    name: 'Archival print on cotton paper',
  },
  {
    id: 1114,
    name: 'Inkjet print on fine art paper',
  },
  {
    id: 1115,
    name: ' Mixed media, digital paint printed on paper',
  },
  {
    id: 1116,
    name: 'Crayons on board',
  },
  {
    id: 1117,
    name: 'Acrylic and watercolour on paper',
  },
  {
    id: 1118,
    name: 'Watercolour and crayons on paper',
  },
  {
    id: 1119,
    name: ' Acrylic and pastel on cardboard',
  },
  {
    id: 1120,
    name: 'Oil and Enamel on canvas',
  },
  {
    id: 1121,
    name: 'Oil on digital inkjet print',
  },
  {
    id: 1122,
    name: 'Gold leaf pen and pen on paper',
  },
  {
    id: 1123,
    name: 'Gold leaf pen and pen on canvas',
  },
  {
    id: 1124,
    name: 'Gold ink on canvas',
  },
  {
    id: 1125,
    name: 'Gold ink on paper',
  },
  {
    id: 1126,
    name: 'Motorcycle helmet',
  },
  {
    id: 1127,
    name: 'Motorcycle',
  },
  {
    id: 1128,
    name: 'Pencil and ink on paper',
  },
  {
    id: 1129,
    name: 'Mixed media on carton',
  },
  {
    id: 1130,
    name: 'Harley-Davidson, Road King Special',
  },
  {
    id: 1131,
    name: 'Printed photograph on wood',
  },
  {
    id: 1132,
    name: 'American box with floating image under glass',
  },
  {
    id: 1133,
    name: 'Ink drawing on paper',
  },
  {
    id: 1134,
    name: 'Watercolour and charcoal on paper',
  },
  {
    id: 1136,
    name: 'oil, watercolour and charcoal on cardboard',
  },
  {
    id: 1137,
    name: 'Acrylic and crayons on paper',
  },
  {
    id: 1138,
    name: 'Acrylic, crayons, and charcoal on paper',
  },
  {
    id: 1139,
    name: 'Ink and crayons on paper',
  },
  {
    id: 1140,
    name: 'Ink and charcoal on paper',
  },
  {
    id: 1141,
    name: 'Acrylic and watercolour on cardboard',
  },
  {
    id: 1142,
    name: 'Oil and pastel on cardboard',
  },
  {
    id: 1143,
    name: 'Oil and watercolour on cardboard',
  },
  {
    id: 1144,
    name: 'Acrylic on paper mounted on canvas',
  },
  {
    id: 1145,
    name: 'Ceramic sculpture with gold leaf',
  },
  {
    id: 1146,
    name: 'ceramic sculpture',
  },
  {
    id: 1147,
    name: 'Rose cut. Approximate diamond weight is 6 carats. 12 karat gold.',
  },
  {
    id: 1148,
    name: 'Rose cut. Approximate diamond weight is 8 carats. 12 karat gold.',
  },
  {
    id: 1149,
    name: 'Rose cut. Approximate diamond weight is 10 carats. 12 karat gold.',
  },
  {
    id: 1150,
    name: 'Rose cut. Approximate diamond weight is 3 carats. 12 karat gold.',
  },
  {
    id: 1151,
    name: 'Rose cut. Approximate diamond weight is 2.50 carats. 12 karat gold.',
  },
  {
    id: 1152,
    name: 'Rose cut. Approximate diamond weight is 3 carats. 12 karat gold.',
  },
  {
    id: 1153,
    name: 'Rose cut and old mine cut. Approximate diamond weight is 2 carats. 12 karat gold and silver.',
  },
  {
    id: 1154,
    name: 'Old mine cut. Approximate diamond weight is 2 carats. 12 karat gold and silver.',
  },
  {
    id: 1156,
    name: 'Natural Bahraini Pearls.',
  },
  {
    id: 1159,
    name: 'Old mine cut. Emerald weight is 1.28 carats. 18 karat gold.',
  },
  {
    id: 1160,
    name: 'Jewellery',
  },
  {
    id: 1161,
    name: 'Vintage old mine cut diamond & emerald Ring.  Emerald weight: 1.28 carats.  Gold: 18 karat.',
  },
  {
    id: 1162,
    name: 'Vintage old mine cut diamond & emerald ring.  Emerald weight: 1.28 carats.  Gold: 18 karat.',
  },
  {
    id: 1167,
    name: 'Vintage natural Bahraini pearl & diamond necklace',
  },
  {
    id: 1170,
    name: 'Old mine cut diamond brooch. Approximate diamond weight: 2 carats.',
  },
  {
    id: 1171,
    name: 'Rose cut and old mine cut diamond brooch. Approximate diamond weight: 2 carats. Gold and silver: 12 karat.',
  },
  {
    id: 1172,
    name: 'Rose cut diamond earrings. Approximate diamond weight: 3 carats. Gold: 12 karat.',
  },
  {
    id: 1173,
    name: 'Early 19th century rose cut diamond earrings. Approximate diamond weight: 3 carats. Gold: 12 karat.',
  },
  {
    id: 1174,
    name: "1950's rose cut diamond pendant. Approximate diamond weight: 2.50 carats. Gold: 12 karat.",
  },
  {
    id: 1175,
    name: "1980's rose cut diamond brooch. Approximate diamond weight: 3 carats. Gold: 12 karat.",
  },
  {
    id: 1176,
    name: 'Early 19th century rose cut diamond brooch. Approximate diamond weight: 3 carats. Gold: 12 karat.',
  },
  {
    id: 1177,
    name: 'Early 19th century rose cut diamond pendant. Approximate diamond weight: 10 carats. Gold: 12 karat.',
  },
  {
    id: 1178,
    name: 'Early 19th century rose cut diamond pendant. Approximate diamond weight: 8 carats. Gold: 12 karat.',
  },
  {
    id: 1179,
    name: 'Early 19th century rose cut diamond pendant. Approximate diamond weight: 6 carats. Gold: 12 karat.',
  },
  {
    id: 1180,
    name: 'Old mine cut diamond brooch. Approximate diamond weight: 2 carats. Silver: 12 karat.',
  },
  {
    id: 1181,
    name: 'Ink and coloured pencils on paper',
  },
  {
    id: 1182,
    name: 'Gouache on paper mounted on canvas',
  },
  {
    id: 1183,
    name: 'Oil and peeling paper on canvas',
  },
  {
    id: 1184,
    name: 'Aqua Tint',
  },
  {
    id: 1185,
    name: 'Pencil on canvas',
  },
  {
    id: 1186,
    name: 'Graphic on Paper',
  },
  {
    id: 1187,
    name: 'Watercolour on Carton',
  },
  {
    id: 1188,
    name: ' Mix Media on Sackcloth',
  },
  {
    id: 1189,
    name: 'Sculpture made of bronze',
  },
  {
    id: 1190,
    name: 'Mixed media on canvas laid on board',
  },
  {
    id: 1191,
    name: 'Original Mixed Media on Paper',
  },
  {
    id: 1192,
    name: 'Stainless steel pipes ',
  },
  {
    id: 1193,
    name: 'Concrete',
  },
  {
    id: 1194,
    name: 'Solid Cast Resin and Brass Legs',
  },
  {
    id: 1195,
    name: 'Concrete, Solid Wood, Incandescant Bulb',
  },
  {
    id: 1196,
    name: 'Frakke Wood (natural finish with gold leaf interior)',
  },
  {
    id: 1197,
    name: 'Steel and Glass',
  },
  {
    id: 1198,
    name: 'Murano Hand Crafted Blown Glass',
  },
  {
    id: 1199,
    name: 'Handcarved oak wood homemade natural beeswax and coconut oil ',
  },
  {
    id: 1200,
    name: 'Brushed Brass',
  },
  {
    id: 1201,
    name: 'Walnut',
  },
  {
    id: 1202,
    name: ' Imbuia Burl Veneer',
  },
  {
    id: 1203,
    name: 'English Bone-China',
  },
  {
    id: 1204,
    name: 'Handmade Olive Oil Soap ',
  },
  {
    id: 1205,
    name: 'Corrugated Cardboard, Felt',
  },
  {
    id: 1206,
    name: 'Brushed Brass, Hand Blown Borosilicate Glass',
  },
  {
    id: 1207,
    name: 'Fibre Enhanced Concrete',
  },
  {
    id: 1208,
    name: 'Concrete, Brass',
  },
  {
    id: 1209,
    name: '18kt White Gold',
  },
  {
    id: 1210,
    name: 'Textile, wood',
  },
  {
    id: 1211,
    name: 'Copper Crochet, Stainless Steel, Glass',
  },
  {
    id: 1212,
    name: 'Marble, Resin, Glass, Powder Coated Steel',
  },
  {
    id: 1213,
    name: 'Marble, Wood, Brass',
  },
  {
    id: 1214,
    name: 'Yellow and Silver Copper',
  },
  {
    id: 1215,
    name: 'Black & yellow gold earrings (18 Kt) set with oval rubies (6.6 carats), white coral (14.80 grams) and small cut rubies (2.61 carats)',
  },
  {
    id: 1216,
    name: 'Brass, Convex mirror',
  },
  {
    id: 1217,
    name: 'Concrete, natural & white',
  },
  {
    id: 1218,
    name: 'Mirror with painted steel',
  },
  {
    id: 1219,
    name: 'Steel',
  },
  {
    id: 1220,
    name: 'Painted Steel and Resin',
  },
  {
    id: 1221,
    name: 'Solid Maple Wood, Powder Coated Steel Base',
  },
  {
    id: 1222,
    name: 'Glass',
  },
  {
    id: 1223,
    name: 'Painted fiberglass',
  },
  {
    id: 1224,
    name: 'Ink and collage on paper',
  },
  {
    id: 1225,
    name: 'Ink, collage, and envelope on paper',
  },
  {
    id: 1226,
    name: 'Polished and matte bronze  on granite base',
  },
  {
    id: 1227,
    name: 'Polished stainless steel, wooden base',
  },
  {
    id: 1228,
    name: 'Photograph covered with black silk',
  },
  {
    id: 1229,
    name: 'Watercolour Pointilism',
  },
  {
    id: 1230,
    name: 'Ballpoint pen and acrylic on paper',
  },
  {
    id: 1231,
    name: 'Ballpoint pen on paper',
  },
  {
    id: 1232,
    name: 'Print On Metal',
  },
  {
    id: 1233,
    name: 'Acrylic on metal',
  },
  {
    id: 1234,
    name: 'Metal and Neon',
  },
  {
    id: 1235,
    name: 'Acrylic, ink and pastel on canvas ',
  },
  {
    id: 1236,
    name: 'Silk screen print ',
  },
  {
    id: 1237,
    name: 'Acrylic and  ink on canvas ',
  },
  {
    id: 1238,
    name: 'Acrylic, ink, oil stick and  pastel on canvas ',
  },
  {
    id: 1240,
    name: 'Embroidery on canvas',
  },
  {
    id: 1241,
    name: 'oil on canvas',
  },
  {
    id: 1244,
    name: 'Acrylic',
  },
  {
    id: 1245,
    name: 'Oil',
  },
  {
    id: 1247,
    name: 'Acrylic on butter paper',
  },
  {
    id: 1248,
    name: 'Mixed media on butter papers',
  },
  {
    id: 1249,
    name: 'Watercolour on paper ',
  },
  {
    id: 1250,
    name: 'Acrylic paint, ink, glue and paper on canvas',
  },
  {
    id: 1251,
    name: 'Oil/linen',
  },
  {
    id: 1252,
    name: 'Acrylic on raw linen',
  },
  {
    id: 1254,
    name: 'Acrylic paint and coloured pencil on paper',
  },
  {
    id: 1255,
    name: 'Silkscreen on archival paper',
  },
  {
    id: 1256,
    name: 'Mixed media on archival paper',
  },
  {
    id: 1257,
    name: 'Mixed media on handmade paper',
  },
  {
    id: 1258,
    name: 'Mixed media on archival paper',
  },
  {
    id: 1259,
    name: 'Felt tip and ink on Fabian paper',
  },
  {
    id: 1260,
    name: 'Collage on paper',
  },
  {
    id: 1261,
    name: 'Oil on cloth',
  },
  {
    id: 1262,
    name: 'oil on masonite',
  },
  {
    id: 1263,
    name: 'Graphite and acrylic on carton',
  },
  {
    id: 1264,
    name: 'Satin paper on 2mm Dibond',
  },
  {
    id: 1265,
    name: 'Satin paper on metal',
  },
  {
    id: 1266,
    name: 'oil on canvas wrapped panel',
  },
  {
    id: 1270,
    name: 'Premium Lustre Photo Paper',
  },
  {
    id: 1271,
    name: 'ball pen on paper',
  },
  {
    id: 1272,
    name: 'Marble Sculpture',
  },
  {
    id: 1273,
    name: 'Pastel and ink on paper',
  },
  {
    id: 1275,
    name: 'mixed media on tracing paper',
  },
  {
    id: 1276,
    name: 'oil mounted on wood on paper',
  },
  {
    id: 1277,
    name: 'Acrylic and decollage on canvas',
  },
  {
    id: 1278,
    name: 'Mixed media on linen',
  },
  {
    id: 1279,
    name: 'corrugated steel and aluminum screws and crushed oil barrel on ',
  },
  {
    id: 1280,
    name: 'corrugated steel and aluminum screws and crushed oil barrel on wood panel',
  },
  {
    id: 1281,
    name: 'wood and bronze sculpture',
  },
  {
    id: 1282,
    name: 'etching on paper',
  },
  {
    id: 1283,
    name: 'oil on canvas mounted on board',
  },
  {
    id: 1284,
    name: 'copper sculpture            ',
  },
  {
    id: 1285,
    name: 'fine art paper print    ',
  },
  {
    id: 1286,
    name: ' printed directly on metal   ',
  },
  {
    id: 1287,
    name: 'infrared photography',
  },
  {
    id: 1288,
    name: 'Ink on cotton paper                                                      ',
  },
  {
    id: 1289,
    name: 'Ink on hand made paper                                            ',
  },
  {
    id: 1290,
    name: 'Acrylic on canvas mounted on board',
  },
  {
    id: 1291,
    name: '3D & Digital Mixed Media',
  },
  {
    id: 1292,
    name: 'Photography & Illustration ',
  },
  {
    id: 1293,
    name: 'Acrylic & Natural Dried Flowers on Canvas',
  },
  {
    id: 1294,
    name: 'Oil',
  },
  {
    id: 1295,
    name: 'Oil and acrylic',
  },
  {
    id: 1296,
    name: 'oil and acrylic on canvas',
  },
  {
    id: 1297,
    name: 'Clay with luster',
  },
  {
    id: 1298,
    name: 'Iron Oxide',
  },
  {
    id: 1299,
    name: 'Steel coated sculpture',
  },
  {
    id: 1301,
    name: 'Oil and mixed media on canvas',
  },
  {
    id: 1302,
    name: 'Oil, clay, sand, glue on wood',
  },
  {
    id: 1303,
    name: 'Oil, clay, sand, bark, glue on wood',
  },
  {
    id: 1307,
    name: 'Acrylic and pencil on tracing paper',
  },
  {
    id: 1310,
    name: 'Tryptique Oil on canvas',
  },
  {
    id: 1311,
    name: 'Hand print on paper',
  },
  {
    id: 1312,
    name: 'Gouache and archival ink on museum etching paper',
  },
  {
    id: 1313,
    name: 'Oil on tempera on wood',
  },
  {
    id: 1314,
    name: 'Handmade paper',
  },
  {
    id: 1315,
    name: 'On carton',
  },
  {
    id: 1316,
    name: 'On cartoon',
  },
  {
    id: 1317,
    name: 'On cartoon',
  },
  {
    id: 1318,
    name: 'On canvas',
  },
  {
    id: 1319,
    name: 'Watercolour on Fabriano Carton ',
  },
  {
    id: 1320,
    name: 'Bic mixed colour on Fabriano Carton',
  },
  {
    id: 1321,
    name: 'Etching on paper',
  },
  {
    id: 1322,
    name: 'Oil on canvas mounted on board',
  },
  {
    id: 1323,
    name: 'oil on cartoon or cardboard',
  },
  {
    id: 1325,
    name: 'Acrylic ink on upholstered cotton paper',
  },
  {
    id: 1326,
    name: 'Marker on paper',
  },
  {
    id: 1327,
    name: 'Acrylic and Acrylic Media on Canvas',
  },
  {
    id: 1328,
    name: 'Grand Antique marble and bronze',
  },
  {
    id: 1329,
    name: 'St Beat marble and bronze',
  },
  {
    id: 1330,
    name: 'Mixed media (acrylic-pencil) on printed photograph on support (forex PVC)',
  },
  {
    id: 1331,
    name: 'Collage on cardboard',
  },
  {
    id: 1332,
    name: 'print',
  },
  {
    id: 1333,
    name: 'Sculpture paper, string, carton ',
  },
  {
    id: 1334,
    name: 'Sculpture made of paper, string, carton ',
  },
  {
    id: 1335,
    name: 'Sculpture made of iron, sponge, plaster',
  },
  {
    id: 1336,
    name: 'Metal installation',
  },
  {
    id: 1337,
    name: 'Acrylic, watercolour, and ink pencils on fabric',
  },
  {
    id: 1338,
    name: 'Acrylic and spray paint on canvas',
  },
  {
    id: 1339,
    name: 'Raw steel with golden leave papers',
  },
  {
    id: 1340,
    name: 'Aluminum and patina',
  },
  {
    id: 1341,
    name: 'Mixed media sculpture',
  },
  {
    id: 1342,
    name: 'Acrylic on canvas wood board',
  },
  {
    id: 1343,
    name: 'Acrylic and ink on canvas',
  },
  {
    id: 1344,
    name: 'Mixed technique/media on paperboard',
  },
  {
    id: 1346,
    name: 'Oil and oil pastel on paper',
  },
  {
    id: 1347,
    name: 'Pantyhose, polyester fiber, thread ',
  },
  {
    id: 1348,
    name: 'Bandage, polyester, fabric, lace, braziers',
  },
  {
    id: 1349,
    name: 'Fabric, straw',
  },
  {
    id: 1350,
    name: 'Acrylic on canvas and gold leaves',
  },
  {
    id: 1351,
    name: 'Coloured pencils and watercolour on paper',
  },
  {
    id: 1358,
    name: 'Mixed media and acrylic on canvas',
  },
  {
    id: 1359,
    name: 'Mixed media and acrylic on canvas',
  },
  {
    id: 1361,
    name: 'Installation 9 panels, oil painting on panel',
  },
  {
    id: 1362,
    name: 'Raw steel with golden leave papers',
  },
  {
    id: 1364,
    name: 'Opaque Water based Pigment and Gold leaf on Vasli (Archival Paper)',
  },
  {
    id: 1365,
    name: 'Bited Birch Wood Bark on Archival Illustration Board',
  },
  {
    id: 1366,
    name: 'Opaque Water based Pigment, Carbon transfer and Gold leaf on Vasli (Archival Paper)',
  },
  {
    id: 1367,
    name: 'Opaque Water based Pigment and Carbon transfer on Vasli (Archival Paper)',
  },
  {
    id: 1368,
    name: 'Powdered chalk and Opaque Water based pigment on Fabriano',
  },
  {
    id: 1370,
    name: 'Metal & bronze sculpture',
  },
  {
    id: 1371,
    name: 'oil on tempera on wood',
  },
  {
    id: 1372,
    name: 'Oil on gesso panel ',
  },
  {
    id: 1373,
    name: 'Gouache & Collage on paper ',
  },
  {
    id: 1374,
    name: 'Oil on Gesso Panel ',
  },
  {
    id: 1375,
    name: 'Acrylic and collage on paper ',
  },
  {
    id: 1376,
    name: 'Gouache, Ink & Collage on paper ',
  },
  {
    id: 1377,
    name: 'Gouache, Ink & Collage on paper ',
  },
  {
    id: 1378,
    name: 'Gouache Ink & collage on paper ',
  },
  {
    id: 1379,
    name: 'Media ink on paper ',
  },
  {
    id: 1380,
    name: 'Watercolour and pencil',
  },
  {
    id: 1381,
    name: 'Suite of ten prints printed with pigment inkjet on Raich fine art velvet paper 300g',
  },
  {
    id: 1382,
    name: 'Suite of ten prints printed with pigment inkjet on Raich fine art velvet paper 300g',
  },
  {
    id: 1383,
    name: 'Suite of ten prints printed with pigment inkjet on Raich fine art velvet paper 300g',
  },
  {
    id: 1384,
    name: 'printed on archival Montval 300 g, with pigment inks',
  },
  {
    id: 1385,
    name: 'printed on archival Montval 300gsm, with pigment inks',
  },
  {
    id: 1386,
    name: 'printed on archival Montval 300g, with pigment inks',
  },
  {
    id: 1387,
    name: 'digital photography, archival Inkjet print',
  },
  {
    id: 1390,
    name: 'Analog photography, Gelatin silver print',
  },
  {
    id: 1392,
    name: 'metal sculpture',
  },
  {
    id: 1395,
    name: 'Bronze sculpture',
  },
  {
    id: 1396,
    name: 'Oil stick on paper',
  },
  {
    id: 1397,
    name: 'Mixed media on board',
  },
  {
    id: 1398,
    name: 'Yarn, wool, linen, polyester, fiber',
  },
  {
    id: 1401,
    name: 'Acrylic and ink on canvas',
  },
  {
    id: 1402,
    name: 'Acrylic and ink on paper',
  },
  {
    id: 1404,
    name: 'Leather, Cotton, Copper plates',
  },
  {
    id: 1405,
    name: 'Leather and cotton',
  },
  {
    id: 1406,
    name: 'Yarn, copper, thread, fique',
  },
  {
    id: 1407,
    name: 'Yarn, cotton, leather',
  },
  {
    id: 1408,
    name: 'Cotton, yarn, fique',
  },
  {
    id: 1409,
    name: 'Acrylic & marker on Bristol paper',
  },
  {
    id: 1410,
    name: 'Watercolour',
  },
  {
    id: 1413,
    name: 'Gouache on Canson paper',
  },
  {
    id: 1416,
    name: 'Fabric ',
  },
  {
    id: 1417,
    name: 'Fabric, mixed media ',
  },
  {
    id: 1418,
    name: 'paper and ink ',
  },
  {
    id: 1419,
    name: 'Steel with resin',
  },
  {
    id: 1420,
    name: 'Oil painting, papers, resin on canvas',
  },
  {
    id: 1423,
    name: 'Mixed media on plexiglass',
  },
  {
    id: 1425,
    name: 'Acrylic',
  },
  {
    id: 1427,
    name: 'Verre',
  },
  {
    id: 1430,
    name: 'print, etching and aquatint on fine print paper',
  },
  {
    id: 1431,
    name: 'Lithograph on fine print paper ',
  },
  {
    id: 1432,
    name: 'Oil on fiber',
  },
  {
    id: 1433,
    name: 'Wax sculpture',
  },
  {
    id: 1436,
    name: 'painted collages, acrylic on paper',
  },
  {
    id: 1437,
    name: 'Ink and oil on canvas',
  },
  {
    id: 1438,
    name: 'acrylic on wood panel',
  },
  {
    id: 1439,
    name: 'acrylic on wrapped canvas',
  },
  {
    id: 1440,
    name: 'Watercolour and collage on paper',
  },
  {
    id: 1441,
    name: 'Silkscreen and watercolour on paper',
  },
  {
    id: 1442,
    name: 'Bronze (black and blue patina)',
  },
  {
    id: 1443,
    name: 'wood sculpture',
  },
  {
    id: 1444,
    name: 'Pencil on paper (one side); watercolour (reverse)',
  },
  {
    id: 1445,
    name: 'Charcoal and acrylic on paper',
  },
  {
    id: 1446,
    name: 'Aluminium and synthetic colours sculpture',
  },
  {
    id: 1447,
    name: 'gouache on board',
  },
  {
    id: 1448,
    name: 'gouache on Canson paper',
  },
  {
    id: 1449,
    name: '11 colour silkscreen on paper',
  },
  {
    id: 1450,
    name: 'porcelain, base and top brass',
  },
  {
    id: 1451,
    name: 'green marble, base and top brass',
  },
  {
    id: 1452,
    name: 'Metal sculpture (galvanized steel)',
  },
  {
    id: 1453,
    name: 'oil pastel on paper',
  },
  {
    id: 1454,
    name: 'Collage on cardboard',
  },
  {
    id: 1455,
    name: 'sponge, wire, copper, plaster',
  },
  {
    id: 1456,
    name: 'Ink and photo on paper',
  },
  {
    id: 1457,
    name: 'Gouache and ink on board',
  },
  {
    id: 1458,
    name: 'Ink on handmade paper',
  },
  {
    id: 1459,
    name: 'Ink on handmade paper',
  },
  {
    id: 1460,
    name: 'Ink on Arches cotton paper',
  },
  {
    id: 1461,
    name: 'Ink-Gold 24 on handmade paper',
  },
  {
    id: 1463,
    name: 'Multiple materials and oil paints on canvas & wood',
  },
  {
    id: 1464,
    name: 'Multiple materials and oil paints on canvas  & wood',
  },
  {
    id: 1465,
    name: 'Oil paints on canvas & wood',
  },
  {
    id: 1466,
    name: 'wood carving ',
  },
  {
    id: 1467,
    name: 'Carrara statuario marine and wood ',
  },
  {
    id: 1468,
    name: 'bronze casting lost wax',
  },
  {
    id: 1473,
    name: 'Ink on canvas',
  },
  {
    id: 1474,
    name: 'ink and acrylic on canvas',
  },
  {
    id: 1475,
    name: 'Oil on canvas, stencil work',
  },
  {
    id: 1477,
    name: 'Mixed media on wood',
  },
  {
    id: 1478,
    name: 'collage',
  },
  {
    id: 1479,
    name: 'Ink',
  },
  {
    id: 1480,
    name: 'Graphic and pigments on canvas ',
  },
  {
    id: 1481,
    name: 'Oil on linen',
  },
  {
    id: 1482,
    name: 'Mixed media on plexiglas',
  },
  {
    id: 1485,
    name: 'Digital work',
  },
  {
    id: 1486,
    name: 'Oil pastel',
  },
  {
    id: 1487,
    name: 'Oil pastel mounted on cardboard',
  },
  {
    id: 1488,
    name: 'watercolour',
  },
  {
    id: 1489,
    name: 'Oil on plexiglass and photopaper',
  },
  {
    id: 1490,
    name: 'Red oil stencil on canvas',
  },
  {
    id: 1491,
    name: 'Acrylic and gold leaf on canvas with patina',
  },
  {
    id: 1492,
    name: 'Acrylic, fabric collage and spray paint on textured canvas',
  },
  {
    id: 1493,
    name: 'Acrylic, fabric collage on textured canvas',
  },
  {
    id: 1494,
    name: 'Acrylic and spray paint on textured canvas',
  },
  {
    id: 1495,
    name: 'Acrylic on textured canvas',
  },
  {
    id: 1496,
    name: 'oak wood',
  },
  {
    id: 1497,
    name: 'wood',
  },
  {
    id: 1498,
    name: 'Black belgium marble',
  },
  {
    id: 1499,
    name: 'Bronze (Black & blue patina)',
  },
  {
    id: 1500,
    name: 'Mixed media and glitter on canvas',
  },
  {
    id: 1501,
    name: 'Silkscreen on archival paper',
  },
  {
    id: 1502,
    name: 'Printed on Hahnemühle Canvas Digital paper',
  },
  {
    id: 1503,
    name: 'Mixed media on craft paper',
  },
  {
    id: 1505,
    name: 'Mixed media on board',
  },
  {
    id: 1506,
    name: 'Mixed media on paper mounted on wooden board',
  },
  {
    id: 1507,
    name: 'Wood, treated lead parchment, stainless steel base',
  },
  {
    id: 1508,
    name: 'Mixed media on Isorel',
  },
  {
    id: 1509,
    name: 'oil on panel',
  },
  {
    id: 1510,
    name: 'Mixed media on wooden board',
  },
  {
    id: 1511,
    name: 'Black marble',
  },
  {
    id: 1512,
    name: 'Oil on paper mounted on wooden board',
  },
  {
    id: 1513,
    name: 'Oil and charcoal on canvas',
  },
  {
    id: 1514,
    name: 'Bronze with brown patina',
  },
  {
    id: 1515,
    name: 'China ink and acrylic inks on mounted paper',
  },
  {
    id: 1516,
    name: 'Gouache and ink, photo-collage',
  },
  {
    id: 1517,
    name: 'Metal',
  },
  {
    id: 1518,
    name: 'Rusted metal',
  },
  {
    id: 1519,
    name: 'Pastel on canvas',
  },
  {
    id: 1522,
    name: 'Acrylic, oil and charcoal on paper ',
  },
  {
    id: 1523,
    name: 'Acrylic, oil and charcoal on linen ',
  },
  {
    id: 1524,
    name: 'Acrylic and oil on Paper ',
  },
  {
    id: 1525,
    name: 'Acrylic and oil on linen ',
  },
  {
    id: 1526,
    name: 'Oil on canvas board',
  },
  {
    id: 1527,
    name: 'Charcoal and crayons on paper',
  },
  {
    id: 1528,
    name: 'Charcoal and crayons on cotton paper',
  },
  {
    id: 1529,
    name: 'Charcoal, cryons and mixed mediums on cotton paper',
  },
  {
    id: 1530,
    name: 'Resin , patinated in bronze',
  },
  {
    id: 1531,
    name: 'Embroidery on Metal Structure',
  },
  {
    id: 1532,
    name: 'Embroidery and Wood',
  },
  {
    id: 1533,
    name: 'Recycled nylon bottles, mounted on wooden board',
  },
  {
    id: 1534,
    name: 'oil, ink on canvas',
  },
  {
    id: 1535,
    name: 'Acrylic & Glow in the dark paint on canvas ',
  },
  {
    id: 1536,
    name: 'Acrylic & charcoal on canvas ',
  },
  {
    id: 1537,
    name: 'Brass base and top, Engraved Painted Resin',
  },
  {
    id: 1538,
    name: 'Brass base and top, Painted Resin',
  },
  {
    id: 1539,
    name: 'Brass base and top, Marble Powder',
  },
  {
    id: 1540,
    name: 'Brass base and top, Stone and Marble',
  },
  {
    id: 1541,
    name: 'Handmade threaded beads, brass base and top',
  },
  {
    id: 1542,
    name: 'Brass base and top, Silver Plated Brass',
  },
  {
    id: 1543,
    name: 'Brass base and top, Resin',
  },
  {
    id: 1544,
    name: 'Handmade carved wood, brass base and top',
  },
  {
    id: 1545,
    name: 'Brass base and top, Porcelain',
  },
  {
    id: 1546,
    name: 'Brass base and top, Porcelain',
  },
  {
    id: 1547,
    name: 'Brass base and top, Brass on Wood',
  },
  {
    id: 1548,
    name: 'Brass base and top, Carved Stone',
  },
  {
    id: 1549,
    name: 'Linocut on paper',
  },
  {
    id: 1550,
    name: 'Oil and coloured pastel on canvas',
  },
  {
    id: 1551,
    name: 'Mixed media on rag paper',
  },
  {
    id: 1552,
    name: 'Wool tapestry',
  },
  {
    id: 1553,
    name: 'Mixed media fabric and acrylic',
  },
  {
    id: 1554,
    name: 'Collage and ink',
  },
  {
    id: 1555,
    name: 'Archival Pigment Print on Hahnemühle Museum Etching ',
  },
  {
    id: 1556,
    name: 'Light-jet print mounted on matt diasec',
  },
  {
    id: 1557,
    name: 'Light-jet print mounted on matt diasec',
  },
  {
    id: 1558,
    name: 'Oil and acrylic on linen',
  },
  {
    id: 1559,
    name: 'porcelain, glazes ',
  },
  {
    id: 1560,
    name: 'white clay, glazes ',
  },
  {
    id: 1561,
    name: 'Watercolour, Ink in Cotton Paper ',
  },
  {
    id: 1566,
    name: 'watercolour, acrylic and ink on paper',
  },
  {
    id: 1567,
    name: 'Dry point, monotype on acid free paper ',
  },
  {
    id: 1568,
    name: 'Earthenware Ceramic Temperature: 1020 C"',
  },
  {
    id: 1569,
    name: 'Acrylic paint and oil pastel on canvas',
  },
  {
    id: 1570,
    name: 'Acrylic paint and oil pastel on leather saddle with high heels',
  },
  {
    id: 1571,
    name: 'Calacatta Italian marble white with gold veins - 18k gold paper - Blue azul Brazilian marble ',
  },
  {
    id: 1572,
    name: 'Black AZIZA tunisian marble with white and gold veins - 18k silver paper ',
  },
  {
    id: 1573,
    name: 'Stainless-steel, Iron  natural needles vegetal from Acacia tree.',
  },
  {
    id: 1574,
    name: 'stainless-steel, iron',
  },
  {
    id: 1575,
    name: 'Iron - brass',
  },
  {
    id: 1576,
    name: 'Mixed media resin, golden leafs and painting ',
  },
  {
    id: 1577,
    name: '15mm plexiglass box on fiberboard in medium density and in gold leaf. Plexiglass legs. 10mm extra-clear Securit glass top.',
  },
  {
    id: 1578,
    name: 'Fragmented violins in welded bronze',
  },
  {
    id: 1579,
    name: 'Print on plexiglass',
  },
  {
    id: 1580,
    name: 'Ink and gold on parchment paper ',
  },
  {
    id: 1581,
    name: 'Shattered glass, resin',
  },
  {
    id: 1582,
    name: 'Coloured wood sculpture',
  },
  {
    id: 1583,
    name: 'Coloured wood and cotton thread',
  },
  {
    id: 1584,
    name: 'oil on canvas with natural pigments',
  },
  {
    id: 1585,
    name: 'Carved ceramic oval ball with oxides',
  },
  {
    id: 1586,
    name: 'Carved ceramic ball with cobalt and oxides',
  },
  {
    id: 1587,
    name: 'Hand carved slab built ceramics, stoneware with oxides abd dry glaze, carved calligraphy',
  },
  {
    id: 1588,
    name: 'Carved ceramic triangle',
  },
  {
    id: 1589,
    name: 'Ceramic hand carved sculpture, stoneware with oxides',
  },
  {
    id: 1590,
    name: 'Bronze sculpture (black patina)',
  },
  {
    id: 1591,
    name: 'Bronze sculpture (black and blue patina)',
  },
  {
    id: 1592,
    name: 'Acrylic on collage',
  },
  {
    id: 1593,
    name: 'Oil stick and acrylic on canvas',
  },
  {
    id: 1594,
    name: 'Ink, gouache, and coloured paper on paper',
  },
  {
    id: 1595,
    name: 'Silicone, Fiber optic, nylon, glass dome',
  },
  {
    id: 1596,
    name: 'Oil stick, acrylic, on pages of Khalil Gibran in French on hardboard.',
  },
  {
    id: 1597,
    name: 'Gouache on 100% cotton paper',
  },
  {
    id: 1598,
    name: 'Ink and Gold Leaf on Paper',
  },
  {
    id: 1599,
    name: 'Acrylic, spray and oil marker on canvas',
  },
  {
    id: 1600,
    name: 'pigment on watercolour paper ',
  },
  {
    id: 1601,
    name: 'Acrylic paint, Spray paint, glossy varnish finish',
  },
  {
    id: 1602,
    name: 'Cereamic Stoneware with white glaze',
  },
  {
    id: 1603,
    name: 'Clothing',
  },
  {
    id: 1604,
    name: 'Monoprint',
  },
  {
    id: 1605,
    name: 'Mixed media drawing on archival paper',
  },
  {
    id: 1606,
    name: 'letterpress ink on screen printed card stock',
  },
  {
    id: 1607,
    name: 'gouache on paper mounted on canvas',
  },
  {
    id: 1608,
    name: 'A photographic elevation',
  },
  {
    id: 1609,
    name: 'Digital Print, Inkjet on Museum Quality paper, no framing',
  },
  {
    id: 1610,
    name: 'Photograph, inkjet on Hahnemühle Baryta ',
  },
  {
    id: 1611,
    name: 'Ink jet on Hahnemühle photo rag ultra smooth paper',
  },
  {
    id: 1612,
    name: 'Photograph, inkjet on Hahnemühle Baryta ',
  },
  {
    id: 1614,
    name: 'matted pigment print on hot-press 100% elegance-velvet rag, fine-art paper',
  },
  {
    id: 1615,
    name: 'Silver gelatin print',
  },
  {
    id: 1616,
    name: 'Acrylic on paper mounted on cardboard ',
  },
  {
    id: 1617,
    name: 'Photography, Printed on Diasec',
  },
  {
    id: 1618,
    name: 'Private zoom call experience',
  },
  {
    id: 1619,
    name: 'Mixed media and collage on canvas',
  },
  {
    id: 1620,
    name: 'Clothing',
  },
  {
    id: 1621,
    name: 'Hand-painted top in satin silk duchesse and a tulle ball gown skirt embroidered with black crystals on guipure ',
  },
  {
    id: 1623,
    name: 'Burned sculpture book',
  },
  {
    id: 1624,
    name: 'Sculptured burned book on paper',
  },
  {
    id: 1625,
    name: 'Collage with acrylic ink, casein paint on paper',
  },
  {
    id: 1626,
    name: 'Burned natural printed book with mixed media ',
  },
  {
    id: 1627,
    name: 'Chinese ink on canvas',
  },
  {
    id: 1628,
    name: 'Drawing, ink on Fabriano paper',
  },
  {
    id: 1629,
    name: ' ink and gold paint on rice paper',
  },
  {
    id: 1630,
    name: 'Industrial Marble & Colours Chrome',
  },
  {
    id: 1631,
    name: 'mixed media sculpture (resin, plastic & wood) 3 levels',
  },
  {
    id: 1632,
    name: 'Screen print',
  },
  {
    id: 1633,
    name: 'Gouache on carton',
  },
  {
    id: 1635,
    name: 'Video Call',
  },
  {
    id: 1636,
    name: 'Etching and mixed media on paper',
  },
  {
    id: 1637,
    name: 'Collage on canvas',
  },
  {
    id: 1638,
    name: 'Glossy sticker',
  },
  {
    id: 1639,
    name: 'Digital art on canvas',
  },
  {
    id: 1640,
    name: 'Iron, fabric and beads',
  },
  {
    id: 1641,
    name: 'Wood pastel and pencil on carton',
  },
  {
    id: 1642,
    name: 'Photograph printed on cotton rag fine art archival paper',
  },
  {
    id: 1643,
    name: 'C-Print on special paper',
  },
  {
    id: 1644,
    name: 'Digital print on special paper',
  },
  {
    id: 1645,
    name: 'Digital photo on cotton paper',
  },
  {
    id: 1646,
    name: 'Acrylic and ink on wood',
  },
  {
    id: 1647,
    name: 'Ink and acrylic on paper',
  },
  {
    id: 1648,
    name: 'Gouache and acrylic on fine art paper',
  },
  {
    id: 1649,
    name: 'C41 photography- Giclee print on archival cotton paper',
  },
  {
    id: 1650,
    name: 'Oil on MDF board',
  },
  {
    id: 1651,
    name: 'Rice paper, resin, crystal',
  },
  {
    id: 1652,
    name: 'Charcoal on carton',
  },
  {
    id: 1653,
    name: 'Iron and copper',
  },
  {
    id: 1654,
    name: 'Lenticular print',
  },
  {
    id: 1655,
    name: 'Resin, stone and wood',
  },
  {
    id: 1656,
    name: 'Oil on special paper',
  },
  {
    id: 1657,
    name: 'Tulle and thread on canvas',
  },
  {
    id: 1658,
    name: 'Iron',
  },
  {
    id: 1659,
    name: 'Acrylic and collage on canvas',
  },
  {
    id: 1660,
    name: 'Drawing with pencil and acrylic on paper, with gold leaves',
  },
  {
    id: 1661,
    name: 'Aluminium, patina and synthetic colours',
  },
  {
    id: 1663,
    name: 'Acrylic and marker on canvas',
  },
  {
    id: 1664,
    name: 'Acrylic on carton with museum glass',
  },
  {
    id: 1665,
    name: 'Mixed media and fabric ',
  },
  {
    id: 1666,
    name: 'Aluminum with Patina',
  },
  {
    id: 1667,
    name: 'Charcoal on canvas',
  },
  {
    id: 1668,
    name: 'charcoal, collage, and gold leaves on cardboard',
  },
  {
    id: 1669,
    name: 'Acrylic and gold leaf on canvas',
  },
  {
    id: 1670,
    name: 'Unframed stretched canvas',
  },
  {
    id: 1671,
    name: 'Etching and monotype print on paper',
  },
  {
    id: 1672,
    name: 'Etching print on paper',
  },
  {
    id: 1673,
    name: '11-colour silkscreen made with Navigation Press Studio',
  },
  {
    id: 1674,
    name: 'Oil pastel on canson',
  },
  {
    id: 1675,
    name: 'Canvas',
  },
  {
    id: 1676,
    name: 'Cotton paper',
  },
  {
    id: 1677,
    name: 'Aquarelle, mixed media + layers on cotton paper',
  },
  {
    id: 1678,
    name: 'Gouache on X-ray chest sheet',
  },
  {
    id: 1679,
    name: 'Limited edition archival pigment print',
  },
  {
    id: 1680,
    name: 'Photoetching print on paper',
  },
  {
    id: 1682,
    name: 'Colouring pens',
  },
  {
    id: 1683,
    name: 'Acrylic on red canvas on cutout wood',
  },
  {
    id: 1685,
    name: 'Box framed canvas',
  },
  {
    id: 1686,
    name: 'Mixed media on cotton paper',
  },
  {
    id: 1687,
    name: 'Pastel on cardboard mounted on canvas',
  },
  {
    id: 1688,
    name: 'Steel installation',
  },
  {
    id: 1689,
    name: 'Screen print on canvas',
  },
  {
    id: 1690,
    name: 'Mixed media on canvas mounted on cardboard',
  },
  {
    id: 1691,
    name: 'Digital Print, Inkjet on Archival Paper',
  },
  {
    id: 1693,
    name: 'Iron sculpture',
  },
  {
    id: 1694,
    name: 'Graphic',
  },
  {
    id: 1695,
    name: 'Watercolour on carton',
  },
  {
    id: 1696,
    name: 'Watercolour on paper',
  },
  {
    id: 1697,
    name: 'Graphic with watercolour',
  },
  {
    id: 1698,
    name: 'acrylic on carton',
  },
  {
    id: 1699,
    name: 'Gaphic',
  },
  {
    id: 1700,
    name: 'Acrylic mounted on board',
  },
  {
    id: 1701,
    name: 'Acrylic and gold leaves on canvas ',
  },
  {
    id: 1702,
    name: 'Bronze (Brown Patina)',
  },
  {
    id: 1703,
    name: 'Bronze (polished gold)',
  },
  {
    id: 1704,
    name: 'Oil on canvas with copper',
  },
  {
    id: 1705,
    name: 'bronze and wood ',
  },
  {
    id: 1706,
    name: 'Bronze and wood',
  },
  {
    id: 1707,
    name: 'Paper cut collage',
  },
  {
    id: 1709,
    name: 'Graphite on paper / oil on Canvas',
  },
  {
    id: 1710,
    name: 'Oil on canvas / nail polish on Paper',
  },
  {
    id: 1711,
    name: 'Graphite on paper\n',
  },
  {
    id: 1712,
    name: 'Oil paint, acrylic and oil pastel on canvas\n',
  },
  {
    id: 1713,
    name: 'oil and pastel on canvas',
  },
  {
    id: 1714,
    name: 'Burnt mixed media on acrylic on canvas',
  },
  {
    id: 1715,
    name: 'Watercolour and pencil on paper',
  },
  {
    id: 1716,
    name: 'Silver print (by enlarging) on baryta chlorobromide paper',
  },
  {
    id: 1717,
    name: 'Crayon and acquarell on spolvero paper',
  },
  {
    id: 1718,
    name: 'Offset print about collage',
  },
  {
    id: 1719,
    name: 'Laminated photograph, wool',
  },
  {
    id: 1721,
    name: 'Coloured pastilles on paper',
  },
  {
    id: 1722,
    name: 'Pencil, pen, marker on paper',
  },
  {
    id: 1723,
    name: 'Mixed media, photograph on paper',
  },
  {
    id: 1724,
    name: 'Oil pastel on cardboard',
  },
  {
    id: 1725,
    name: '100% silk scarf',
  },
  {
    id: 1726,
    name: 'Bronze Sculpture, base in iron',
  },
  {
    id: 1727,
    name: 'Acrylic and Pigment stick on canvas\n',
  },
  {
    id: 1729,
    name: 'Acrylic and Mixed Media on Canvas (triptych)',
  },
  {
    id: 1731,
    name: 'Triptych Photography | digital pigment print on hahnemühle photo rag fine art paper (each 40 x 60cm)\n',
  },
  {
    id: 1734,
    name: '14kt Rose Gold, Diamonds, Enamel\n',
  },
  {
    id: 1738,
    name: 'Digital photography\n',
  },
  {
    id: 1739,
    name: 'Digital screen print on Hahnemuhle 308 gr. Paper',
  },
  {
    id: 1740,
    name: ' Charcoal, ink, pastel on paper',
  },
  {
    id: 1741,
    name: 'Canvas, propolis \n',
  },
  {
    id: 1742,
    name: 'Canvas, propolis\n',
  },
  {
    id: 1743,
    name: 'ink on paper',
  },
  {
    id: 1744,
    name: 'Watercolour on canvas\n',
  },
  {
    id: 1745,
    name: 'Acrylic on Canvas, Triptych\n',
  },
  {
    id: 1746,
    name: 'Etching and aquatint',
  },
  {
    id: 1748,
    name: 'Wood, plaster, polyester thread, and bronze',
  },
  {
    id: 1749,
    name: 'Embroidery with hair on fabric, dyptich',
  },
  {
    id: 1750,
    name: 'Resin, Steel, fiberglas, urethane, powder coated steel base',
  },
  {
    id: 1753,
    name: 'Spray paint and acrylic',
  },
  {
    id: 1754,
    name: 'Print on archival inkjet paper',
  },
  {
    id: 1755,
    name: 'Digital print on SILK',
  },
  {
    id: 1756,
    name: 'Acrylic, gold leaf, and dollar bills on linen',
  },
  {
    id: 1757,
    name: 'Digital Screen Print',
  },
  {
    id: 1758,
    name: 'Ground pigments from rock sediments, gouache, sumi ink on teas dyed paper',
  },
  {
    id: 1759,
    name: 'Brass, Capsule 12/1',
  },
  {
    id: 1760,
    name: 'Resin sculpture, painted like bronze',
  },
  {
    id: 1762,
    name: 'Diptych, Analogue Photography',
  },
  {
    id: 1763,
    name: 'Charcoal and crayon',
  },
  {
    id: 1764,
    name: 'Oil mounted on board',
  },
  {
    id: 1765,
    name: 'Bronze (Black and Blue Patina)',
  },
  {
    id: 1766,
    name: 'Acrylic and pumice on canvas',
  },
  {
    id: 1768,
    name: 'Tempera on paper laid on canvas',
  },
  {
    id: 1769,
    name: 'Acrylic on cardboard mounted on canvas',
  },
  {
    id: 1770,
    name: 'Bronze, black patina',
  },
  {
    id: 1771,
    name: 'Oil, acrylics, pastels, graphite and street dust',
  },
  {
    id: 1772,
    name: 'Mixed media and acrylic on canvas',
  },
  {
    id: 1773,
    name: 'Mixed media and acrylic on canvas',
  },
  {
    id: 1774,
    name: 'Collage and mixed media on canvas',
  },
  {
    id: 1804,
    name: 'watercolour on paper',
  },
  {
    id: 1805,
    name: 'etching highligthed with watercolours',
  },
  {
    id: 1808,
    name: 'bronze sculpture (black and blue patina)',
  },
  {
    id: 1811,
    name: 'charcoal on paper mounted on board',
  },
  {
    id: 1813,
    name: 'acrylic gouache and archival ink on canvas',
  },
  {
    id: 1814,
    name: 'pastel and crayons on paper',
  },
  {
    id: 1815,
    name: 'acrylic and pigment on canvas',
  },
  {
    id: 1816,
    name: 'charcoal, collage and gold leaves on cardboard',
  },
  {
    id: 1818,
    name: 'acylic on canvas',
  },
  {
    id: 1819,
    name: 'oil on paper',
  },
  {
    id: 1820,
    name: 'oil on wood',
  },
  {
    id: 1821,
    name: 'acrylic on cardboard',
  },
  {
    id: 1822,
    name: 'oil on paper mounted on board',
  },
  {
    id: 1825,
    name: 'acrylic on jute',
  },
  {
    id: 1826,
    name: 'oil bar and pencil on paper',
  },
  {
    id: 1827,
    name: 'watercolour and pastel on paper',
  },
  {
    id: 1830,
    name: 'pastel and ink on paper',
  },
  {
    id: 1832,
    name: 'Clay painted a froid',
  },
  {
    id: 1834,
    name: 'Pencil and gouache drawing',
  },
  {
    id: 1835,
    name: 'Black and white lithograph',
  },
  {
    id: 1836,
    name: 'Verde Guatemala marble',
  },
  {
    id: 1837,
    name: 'Bronze, black and blue patina',
  },
  {
    id: 1838,
    name: 'Drawing',
  },
  {
    id: 1839,
    name: 'Charcoal drawing on paper',
  },
  {
    id: 1840,
    name: 'Reproduction of a collage',
  },
  {
    id: 1841,
    name: 'Giclée print',
  },
  {
    id: 1842,
    name: 'Pencil drawing',
  },
  {
    id: 1843,
    name: 'charcoal drawing',
  },
  {
    id: 1844,
    name: 'Bronze sculpture, marble base',
  },
  {
    id: 1845,
    name: 'Marble sculpture on Plexiglas base',
  },
  {
    id: 1846,
    name: 'Bronze and crystals (green patina)',
  },
  {
    id: 1847,
    name: 'Woodcut',
  },
  {
    id: 1848,
    name: 'Bronze (polished gold)',
  },
  {
    id: 1873,
    name: 'Fine stoneware in two parts',
  },
  {
    id: 1874,
    name: 'Archival inkjet print on Hahnemühle etching paper',
  },
  {
    id: 1876,
    name: 'Oil and mixed media on canvas ',
  },
  {
    id: 1877,
    name: 'Digital photography, silver processing',
  },
  {
    id: 1878,
    name: '-',
  },
  {
    id: 1879,
    name: 'Acrylic, charcoal and marquetry inlays on wood',
  },
  {
    id: 1880,
    name: 'Acrylic and fabric',
  },
  {
    id: 1882,
    name: 'Printed in Diasec',
  },
  {
    id: 1883,
    name: 'Oil and sand on canvas',
  },
  {
    id: 1884,
    name: 'Analog photography, silver processing',
  },
  {
    id: 1887,
    name: 'Porcelain',
  },
  {
    id: 1888,
    name: 'Silkscreen on cotton paper',
  },
  {
    id: 1889,
    name: '9K gold bookmark',
  },
  {
    id: 1890,
    name: 'Acrylic and spray paint on paper',
  },
  {
    id: 1891,
    name: 'Digital print on cotton paper',
  },
  {
    id: 1892,
    name: 'Digital photography, printed on canvas',
  },
  {
    id: 1895,
    name: 'Digital art printed on canvas',
  },
  {
    id: 1896,
    name: 'Graphite on paper',
  },
  {
    id: 1897,
    name: 'Graphite on cardboard',
  },
  {
    id: 1898,
    name: 'Mixed media, fabric and acrylic',
  },
  {
    id: 1899,
    name: 'Graphite and acrylic on canvas',
  },
  {
    id: 1900,
    name: 'Embroidery on white linen',
  },
  {
    id: 1901,
    name: 'Acid free markers',
  },
  {
    id: 1902,
    name: 'Handbuilt stoneware',
  },
  {
    id: 1903,
    name: 'Photography done with a digital medium format camera',
  },
  {
    id: 1904,
    name: 'Screenprint on cotton paper',
  },
  {
    id: 1905,
    name: 'Wax and acrylic on canvas',
  },
  {
    id: 1906,
    name: 'Acrylic and resin on canvas',
  },
  {
    id: 1907,
    name: 'oil and resin on canvas',
  },
  {
    id: 1908,
    name: 'Acrylic on cotton',
  },
  {
    id: 1909,
    name: 'Print on board',
  },
  {
    id: 1910,
    name: 'Watercolour and pastel on paper',
  },
  {
    id: 1911,
    name: 'Wood construction',
  },
  {
    id: 1912,
    name: 'Marble sculpture',
  },
  {
    id: 1914,
    name: 'Oil pastel on canvas',
  },
  {
    id: 1915,
    name: 'Print on paper mounted on board',
  },
  {
    id: 1916,
    name: 'Mixed media on stretched canvas',
  },
  {
    id: 1917,
    name: 'Powder coated steel',
  },
  {
    id: 1919,
    name: 'Toner on book pages',
  },
  {
    id: 1920,
    name: 'Resin cast with steel base ',
  },
  {
    id: 1921,
    name: 'Photographic print on Hahnemühle Fine Art Baryta Satin 300gsm ',
  },
  {
    id: 1922,
    name: 'Silver gelatin print, lith process with selenium toning, vintage paper',
  },
  {
    id: 1923,
    name: 'Acrylic and cotton thread on wood',
  },
  {
    id: 1926,
    name: 'Torn, reclaimed paper on canvas',
  },
  {
    id: 1928,
    name: 'Ink, gouache, acrylic and colored paper on paper',
  },
  {
    id: 1930,
    name: 'Silk yarn on plastic and metal',
  },
  {
    id: 1932,
    name: 'Printed in high resolution on high quality canvas',
  },
  {
    id: 1933,
    name: 'colour pencil on paper',
  },
  {
    id: 1934,
    name: 'Gouache on paper mounted on board',
  },
  {
    id: 1935,
    name: 'acrylic and  gouache on paper ',
  },
  {
    id: 1938,
    name: 'charcoal and ink on paper',
  },
  {
    id: 1939,
    name: 'oil on cardboard',
  },
  {
    id: 1940,
    name: 'watercolour on cardboard',
  },
  {
    id: 1941,
    name: 'burnt and smoke on canvas ',
  },
  {
    id: 1942,
    name: 'mixed media and fire on canvas',
  },
  {
    id: 1944,
    name: "Caran d'Ache and coloured ink on paper",
  },
  {
    id: 1945,
    name: 'ink and coloured felt tip on carton',
  },
  {
    id: 1946,
    name: 'bronze sculpture (black patina)',
  },
  {
    id: 1947,
    name: 'mixed media on carton',
  },
  {
    id: 1948,
    name: 'etching on paper         This work is an edition ninety three of one hundred twenty .',
  },
  {
    id: 1949,
    name: 'mixed media, acrylic and sand on paper',
  },
  {
    id: 1952,
    name: 'acid free markers',
  },
  {
    id: 1953,
    name: 'embroidery',
  },
  {
    id: 1955,
    name: 'oil on canvas mounted on wood',
  },
  {
    id: 1956,
    name: 'Aluminum sculpture',
  },
  {
    id: 1957,
    name: 'giclée print',
  },
  {
    id: 1959,
    name: 'mixed media on canvas mounted on cardboard',
  },
  {
    id: 1960,
    name: 'lithograph',
  },
  {
    id: 1961,
    name: 'mixed media and fabric on canvas',
  },
  {
    id: 1963,
    name: 'reproduction of a collage',
  },
  {
    id: 1964,
    name: 'Acrylic on canvas, oil pastel and paper gold',
  },
  {
    id: 1965,
    name: 'acrylic on canvas and oil pastel',
  },
  {
    id: 1966,
    name: 'Acrylic on canvas, oil pastel and gold leaf',
  },
  {
    id: 1967,
    name: 'porcelaine and black glaze',
  },
  {
    id: 1968,
    name: 'stonewear and raw pigment',
  },
  {
    id: 1969,
    name: 'Pastel',
  },
  {
    id: 1970,
    name: 'Pastel on cardboard or paper',
  },
  {
    id: 1971,
    name: 'Ink and watercolor on paper',
  },
  {
    id: 1972,
    name: 'Watercolor on cardboard',
  },
  {
    id: 1973,
    name: 'Watercolor',
  },
  {
    id: 1974,
    name: 'Drawing on paper',
  },
  {
    id: 1975,
    name: 'Watercolor on paper',
  },
  {
    id: 1976,
    name: 'Spray paint on canvas',
  },
  {
    id: 1977,
    name: 'Stencil and watercolor on paper',
  },
  {
    id: 1978,
    name: 'Gouache on cardboard',
  },
  {
    id: 1979,
    name: 'Lithograph in colors',
  },
  {
    id: 1980,
    name: 'Print on Japon paper',
  },
  {
    id: 1981,
    name: 'Galvanized iron on wood base',
  },
  {
    id: 1982,
    name: 'Acrylic, marker and chalk on canvas',
  },
  {
    id: 1983,
    name: 'Acrylic and enamel on canvas',
  },
  {
    id: 1984,
    name: 'Ink,gouache,acrylic and colored paper on paper',
  },
  {
    id: 1985,
    name: 'Ink, gouache and colored paper on paper',
  },
  {
    id: 1986,
    name: 'Acrylic, resin, gold leaf on canvas ',
  },
  {
    id: 1987,
    name: 'Burnt mixed media on acrylics',
  },
  {
    id: 1988,
    name: 'Burnt smoke on paper',
  },
  {
    id: 1989,
    name: 'Burnt smoke and acrylic on canvas',
  },
  {
    id: 1990,
    name: 'high quality resin coated photographic paper 225g',
  },
  {
    id: 1991,
    name: 'Acrylic and mixed media on aluminum',
  },
  {
    id: 1992,
    name: 'Acrylic, enamel and mixed media on aluminum ',
  },
  {
    id: 1993,
    name: 'Acrylic, Enamel and mixed media on canvas',
  },
  {
    id: 1994,
    name: 'Acrylic, enamel and mixed media on canvas',
  },
  {
    id: 1995,
    name: 'Acrylic, enamel and mixed media on aluminum ',
  },
  {
    id: 1996,
    name: 'Ink on art matte paper',
  },
  {
    id: 1999,
    name: 'Digital print on polyester',
  },
  {
    id: 2000,
    name: 'Leather and mixed media',
  },
  {
    id: 2002,
    name: 'Photograph printed on fine art paper ',
  },
  {
    id: 2004,
    name: 'Photograph printed on archival matte cotton paper',
  },
  {
    id: 2005,
    name: 'Painted photo',
  },
  {
    id: 2006,
    name: 'Glass and coloured epoxy mix',
  },
  {
    id: 2008,
    name: 'Acrylic, collage and sand on canvas',
  },
  {
    id: 2009,
    name: 'Mixed media on red canvas',
  },
  {
    id: 2010,
    name: 'Iron and copper',
  },
  {
    id: 2011,
    name: 'Natural sand and glue on canvas',
  },
  {
    id: 2014,
    name: 'Gouache and watercolour on paper',
  },
  {
    id: 2015,
    name: 'Digital print on paper or on canvas ',
  },
  {
    id: 2016,
    name: 'Tempera and acrylic on canvas',
  },
  {
    id: 2017,
    name: 'Pastel on paper laid on board',
  },
  {
    id: 2018,
    name: 'Watercolor on canvas mounted on cardboard',
  },
  {
    id: 2019,
    name: 'Oil on canvas mounted cardboard',
  },
  {
    id: 2020,
    name: 'Oil on cardboard mounted on canvas ',
  },
  {
    id: 2021,
    name: 'Pastel on board',
  },
  {
    id: 2022,
    name: 'Diptych. Collage and mixed media on canvas',
  },
  {
    id: 2023,
    name: 'Pastel and charcoal on paper',
  },
  {
    id: 2024,
    name: 'Drypoint',
  },
  {
    id: 2025,
    name: 'Bronze black and blue patina',
  },
  {
    id: 2026,
    name: 'Aluminium',
  },
  {
    id: 2027,
    name: 'Bronze (gold polish)',
  },
  {
    id: 2028,
    name: 'Marble lie de vin',
  },
  {
    id: 2029,
    name: 'Painted polystirene',
  },
  {
    id: 2030,
    name: 'Mixed media on goat leather',
  },
  {
    id: 2031,
    name: 'oil on canvas and mixed media',
  },
  {
    id: 2032,
    name: 'Mixed media, acrylic on canvas',
  },
  {
    id: 2033,
    name: 'Watercolour on Arches cotton paper',
  },
  {
    id: 2034,
    name: '2007 BMW Z4 Coupe',
  },
  {
    id: 2035,
    name: 'Gouache and watercolor on paper',
  },
  {
    id: 2036,
    name: 'Chinese ink and pastel on paper',
  },
  {
    id: 2037,
    name: 'Wax on paper',
  },
  {
    id: 2038,
    name: '\nEcoline on paper',
  },
  {
    id: 2039,
    name: 'Oil on plasticised surface',
  },
  {
    id: 2040,
    name: 'Painting under glass',
  },
  {
    id: 2041,
    name: 'Oil on Canvas',
  },
  {
    id: 2043,
    name: 'Feutre on paper',
  },
  {
    id: 2044,
    name: 'Silver gelatin archival print',
  },
  {
    id: 2045,
    name: 'Marble Carrara',
  },
  {
    id: 2046,
    name: 'oil on canvas mounted on cardboard',
  },
  {
    id: 2047,
    name: 'Oil and gold on wood',
  },
  {
    id: 2049,
    name: 'ink and marker on paper',
  },
  {
    id: 2050,
    name: 'ink and watercolour on paper',
  },
  {
    id: 2052,
    name: 'pastel on cardboard',
  },
  {
    id: 2053,
    name: 'pencil and ink on paper',
  },
  {
    id: 2055,
    name: 'Sewn tapestry with acrylic fabrics',
  },
  {
    id: 2056,
    name: 'Ink and acrylic on Cotton paper',
  },
  {
    id: 2057,
    name: 'Copper oxyde sculpture',
  },
  {
    id: 2058,
    name: 'Acrylic on canvas & Oil pastel & gold leaf',
  },
  {
    id: 2059,
    name: 'Acrylic on cardborad',
  },
  {
    id: 2061,
    name: 'Oil on canvas, Diptych',
  },
  {
    id: 2062,
    name: 'Mxed media on canvas',
  },
  {
    id: 2063,
    name: 'Architecture oil on canvas',
  },
  {
    id: 2064,
    name: 'Ink on paper - Triptych',
  },
  {
    id: 2065,
    name: 'Mixed media and color collar on canvas (quadriptych)',
  },
  {
    id: 2066,
    name: 'Acrylic, charcoal and wood marquetry on wooden board',
  },
  {
    id: 2067,
    name: 'Mxed media on paper',
  },
  {
    id: 2068,
    name: 'Lace',
  },
  {
    id: 2069,
    name: 'Acryllic on canvas',
  },
  {
    id: 2070,
    name: 'Ink and watercolour-diptych',
  },
  {
    id: 2071,
    name: 'oil on canvas',
  },
  {
    id: 2072,
    name: 'n/a',
  },
  {
    id: 2076,
    name: 'Fine pastel',
  },
  {
    id: 2077,
    name: 'Photography-Archival Print on Cotton Paper ',
  },
  {
    id: 2078,
    name: 'Charcoal and ink on paper 300 gr - Diptych',
  },
  {
    id: 2079,
    name: ' lithography with gold and silver leaves and a touch of water colour',
  },
  {
    id: 2080,
    name: 'China ink and acylic on paper mounted on canvas',
  },
  {
    id: 2082,
    name: 'Acrylic on canvas - Diptych',
  },
  {
    id: 2084,
    name: 'Lithograph with watercolour',
  },
  {
    id: 2085,
    name: 'Sepia, charcoal, and pencil on paper',
  },
  {
    id: 2086,
    name: 'Work on paper',
  },
  {
    id: 2087,
    name: 'Monotype , oil-based etching ink on paper',
  },
  {
    id: 2088,
    name: 'Mixed media on canvas mounted on board',
  },
  {
    id: 2089,
    name: 'Lithography Giclée',
  },
  {
    id: 2091,
    name: 'Mixed media on canvas on wood',
  },
  {
    id: 2092,
    name: 'Green Felt Pouch, Vermeil and Emerald Button, Old Wooden Box Enhanced with Gold',
  },
  {
    id: 2093,
    name: 'Rattan with Bokja assemblage',
  },
  {
    id: 2094,
    name: 'First Aid kit, Velcro, Textile, Concrete, Metal Wires, Clay, and Acrylic Paint',
  },
  {
    id: 2095,
    name: 'Painted Wood and Wood Veneer with a Semi-matt Finish',
  },
  {
    id: 2096,
    name: '3D printed Resin',
  },
  {
    id: 2097,
    name: 'Wood Ash, White Matt Paint, White Glossy Paint, Black Glossy Paint, Green Paint, Liquid Brushed Metal Brass Finish and Gold Brass',
  },
  {
    id: 2098,
    name: 'Multilaminar Wood, Composed of Several Sheets Individually Dyed, Assembled to Obtain Veritable Solid Wood',
  },
  {
    id: 2099,
    name: 'Polished Stainless Steel',
  },
  {
    id: 2100,
    name: 'French Oak Wood Sculpture, Thin Red Leather ',
  },
  {
    id: 2101,
    name: 'Leather and, Stainless Steel ',
  },
  {
    id: 2102,
    name: 'Cast Brass and Lacquered Wood ',
  },
  {
    id: 2103,
    name: 'Painting in Acrylic on Canvas, Box in Plexiglas with Accessories',
  },
  {
    id: 2104,
    name: 'Photo Print Direct on Acrylic, Stainless Steel Box',
  },
  {
    id: 2105,
    name: 'Fire Extinguisher',
  },
  {
    id: 2106,
    name: 'The box is Made Out of Pine Wood Inlayed with Little Bronze Stars, and Lacquered with Blue Pigment.\nA Hand Carved Bronze Snake Lays on a Resin Pebble That is Fixed to The Top of The Box.',
  },
  {
    id: 2107,
    name: 'First Aid Kit Box - Stainless Steel',
  },
  {
    id: 2108,
    name: 'Matte Lacquered Wood, with Brass Hinges',
  },
  {
    id: 2109,
    name: 'Ceramics and Silk',
  },
  {
    id: 2110,
    name: 'Painting in Mixed Media on Special Fabric, Box in Plexiglas and Accessories in Oxidized Bronze',
  },
  {
    id: 2111,
    name: 'Painting in Mixed Media, Box in Plexiglas and Accessories in Oxidized Bronze',
  },
  {
    id: 2112,
    name: 'Aluminum and French Oak',
  },
  {
    id: 2113,
    name: 'Stainless steel brushed and mirror polished, Leather',
  },
  {
    id: 2114,
    name: 'Shifted French Oak Veneer in Geometric Pattern, and Contour Inlay of Motifs Using Stained Veneer and Mother of Pearl Outlined with Tin.',
  },
  {
    id: 2115,
    name: 'Stone-wear Ceramic; Black Underglaze, Scratched; Transparent Glazing',
  },
  {
    id: 2116,
    name: 'Natural French oak Wood, Red Platter in 5mm mdf Wood, Wheels, Dunlop Foam and Feathers, Linen and Cotton Fibers',
  },
  {
    id: 2117,
    name: 'Plexiglass',
  },
  {
    id: 2118,
    name: 'Coat Hanger: Powder-Coated Bent Steel. Medical kit: Leather, Straps, Foam Filling, Reflective Strips',
  },
  {
    id: 2119,
    name: 'Composite Material and Laser Cut Foam',
  },
  {
    id: 2120,
    name: 'Steel and Resin',
  },
  {
    id: 2121,
    name: '3D printed in SLA, Satin Silver Paint',
  },
  {
    id: 2122,
    name: 'Glazed Stoneware 1200°C',
  },
  {
    id: 2123,
    name: 'multimedia on plexi foot',
  },
  {
    id: 2124,
    name: 'Mixed Media (fabric and acrylic)',
  },
  {
    id: 2125,
    name: 'Mixed Media (fabric and acrylic 3D)',
  },
  {
    id: 2147,
    name: 'fire and acrylic on canvas',
  },
  {
    id: 2148,
    name: 'acrylic on canvas mounted on board',
  },
  {
    id: 2149,
    name: 'gouache and tempera on cardboard ',
  },
  {
    id: 2150,
    name: 'gouache, watercolour, and chinese ink on paper',
  },
  {
    id: 2151,
    name: 'felt pen and crayon on cardboard',
  },
  {
    id: 2153,
    name: 'pencil and gouache on paper',
  },
  {
    id: 2154,
    name: 'wax pencil on paper',
  },
  {
    id: 2155,
    name: 'watecolour on paper',
  },
  {
    id: 2156,
    name: 'stencil and watercolour on cardboard',
  },
  {
    id: 2157,
    name: 'acrylic on cardboard laid on panel',
  },
  {
    id: 2159,
    name: 'stoneware ceramics, partly glazed, partly naked',
  },
  {
    id: 2160,
    name: 'felt pen and mixed media on canvas',
  },
  {
    id: 2161,
    name: 'painted styropan on board ',
  },
  {
    id: 2162,
    name: 'bronze sculpture (grey patina)',
  },
  {
    id: 2163,
    name: 'etching, relief, stencil and watercolour ',
  },
  {
    id: 2164,
    name: 'olive wood sculpture',
  },
  {
    id: 2166,
    name: 'Fine art print. Lithography: 35 colors, Silkscreen: 2 colors, Hot pressed foil 1 color\nPrinted in a numbered and signed edition of 85 on Fabriano Rosaspina paper 290 gm.',
  },
  {
    id: 2167,
    name: "photomontage, printed on Epson Summersel Velvert 225 grm fine art cottonrap paper and mounted on medium density aluminium. Print is sprayed with Hahmmulhe's fixative anti-UV spray. ",
  },
  {
    id: 2168,
    name: 'Acrylic and oil pastel',
  },
  {
    id: 2169,
    name: 'Blown sheet metal Sculpture',
  },
  {
    id: 2170,
    name: 'Blown sheet metal, Sculpture',
  },
  {
    id: 2171,
    name: 'Wire sculpture ',
  },
  {
    id: 2172,
    name: 'Acrylic on burlap',
  },
  {
    id: 2175,
    name: 'Quadriptych:Acrylic on paper',
  },
  {
    id: 2176,
    name: 'Resin',
  },
  {
    id: 2177,
    name: 'Ink on cardboard ',
  },
  {
    id: 2178,
    name: 'Gouache and sand on carton',
  },
  {
    id: 2179,
    name: 'Monoprint, mixed media on paper',
  },
  {
    id: 2180,
    name: 'Linoleum cut on paper',
  },
  {
    id: 2181,
    name: 'Soft pastel on cotton paper',
  },
  {
    id: 2182,
    name: 'Acrylic, oil on canvas',
  },
  {
    id: 2183,
    name: 'Chinese ink on paper',
  },
  {
    id: 2184,
    name: 'Natural colours on canvas',
  },
  {
    id: 2185,
    name: 'Acrylic and oil pastel on canvas',
  },
  {
    id: 2186,
    name: 'Table with bronze support',
  },
  {
    id: 2187,
    name: 'Bronze on marble',
  },
  {
    id: 2188,
    name: 'acrylic and fire on canvas',
  },
  {
    id: 2189,
    name: 'Acrylic and neon on canvas, Plexiglas',
  },
  {
    id: 2191,
    name: 'archival fiber inkjet print mounted on aluminum ',
  },
  {
    id: 2192,
    name: 'Mixed Media Collage',
  },
  {
    id: 2194,
    name: 'Mixed Media on paper, felt pen, ball pen, pencil, conte',
  },
  {
    id: 2195,
    name: 'Conte on paper',
  },
  {
    id: 2196,
    name: 'Mixed media on paper, charcoal, conte, pencil',
  },
  {
    id: 2198,
    name: 'acrylic and gauze on canvas ',
  },
  {
    id: 2199,
    name: 'acrylic and paillettes on canvas ',
  },
  {
    id: 2200,
    name: 'dust, rust, pastel, wipes on canvas, mounted on wood',
  },
  {
    id: 2201,
    name: 'dust, wipes, glue, and acrylic primer on canvas ',
  },
  {
    id: 2203,
    name: 'collage (metal on eau-forte)',
  },
  {
    id: 2204,
    name: 'oil and sand on wood',
  },
  {
    id: 2205,
    name: 'iron sculpture',
  },
  {
    id: 2207,
    name: 'tempera on board',
  },
  {
    id: 2209,
    name: 'india ink on cotton paper mounted on canvas ',
  },
  {
    id: 2210,
    name: 'acrylic ink on cotton paper mounted on canvas',
  },
  {
    id: 2211,
    name: 'acrylic on canvas',
  },
  {
    id: 2212,
    name: 'sculpture',
  },
  {
    id: 2213,
    name: 'ink and gold paint on rice paper ',
  },
  {
    id: 2214,
    name: 'acrylic ink on cotton paper',
  },
  {
    id: 2215,
    name: 'pencil and watercolour on paper',
  },
  {
    id: 2216,
    name: 'oil, acrylic, ink and charcoal on canvas',
  },
  {
    id: 2217,
    name: 'oil pastel on paper ',
  },
  {
    id: 2218,
    name: 'watercolour and pencil on paper',
  },
  {
    id: 2219,
    name: 'wooden sculputure\nunique piece',
  },
  {
    id: 2220,
    name: 'mixed media on wooden board ',
  },
  {
    id: 2221,
    name: 'mixed media on fabric',
  },
  {
    id: 2222,
    name: 'bronze sculpture ',
  },
  {
    id: 2223,
    name: 'fire and acrylic on cotton canvas',
  },
  {
    id: 2224,
    name: 'oil on isorel',
  },
  {
    id: 2225,
    name: 'pencil and sanguine red ink on paper',
  },
  {
    id: 2226,
    name: 'oil on canvas ',
  },
  {
    id: 2227,
    name: 'tempera on panel',
  },
  {
    id: 2228,
    name: 'mixed media on enamel',
  },
  {
    id: 2229,
    name: 'aluminium sculpture',
  },
  {
    id: 2230,
    name: 'mixed media on canson ',
  },
  {
    id: 2231,
    name: 'acrylic on jute ',
  },
  {
    id: 2232,
    name: 'acrylic on board',
  },
  {
    id: 2233,
    name: ' oil on handmade paper',
  },
  {
    id: 2234,
    name: 'mixed media fabric and fabric paint',
  },
  {
    id: 2235,
    name: 'ink and charcoal on paper',
  },
  {
    id: 2236,
    name: 'pastel and charcoal on paper ',
  },
  {
    id: 2237,
    name: 'wooden sculpture\noil on wood',
  },
  {
    id: 2238,
    name: 'oil, watercolour, pencil and fabric collage on board',
  },
  {
    id: 2239,
    name: 'tempera on canvas mounted on board',
  },
  {
    id: 2240,
    name: 'aluminium and patina sculpture',
  },
  {
    id: 2241,
    name: 'bronze and patina sculpture',
  },
  {
    id: 2242,
    name: 'acrylic, sand, pebbles, and collage on strong cardboard',
  },
  {
    id: 2243,
    name: 'acrylic, sand, pebbles, and collage on strong cardboard',
  },
  {
    id: 2244,
    name: 'Huile sur panneau',
  },
  {
    id: 2245,
    name: 'Huile sur toile',
  },
  {
    id: 2246,
    name: 'Pastel sur carton',
  },
  {
    id: 2247,
    name: 'Huile surpanneau',
  },
  {
    id: 2248,
    name: 'Huile sur carton',
  },
  {
    id: 2249,
    name: "Paire d'Huiles sur toile",
  },
  {
    id: 2250,
    name: 'Miniatures Ivoire ou Papier',
  },
  {
    id: 2251,
    name: 'Mixed Média sur carton',
  },
  {
    id: 2252,
    name: 'Aquarelle sur carton',
  },
  {
    id: 2253,
    name: 'Aquarelle sur papier',
  },
  {
    id: 2254,
    name: 'Paire Gouaches sur papier',
  },
  {
    id: 2255,
    name: 'Fusain sur papier',
  },
  {
    id: 2256,
    name: 'acrylic and painted fabric',
  },
  {
    id: 2257,
    name: 'acrylic oil and fabric',
  },
  {
    id: 2258,
    name: 'acrylic and oil',
  },
  {
    id: 2259,
    name: 'acrylic and oil on canvas',
  },
  {
    id: 2260,
    name: 'acrylic and painted fabric on canvas',
  },
  {
    id: 2261,
    name: 'acrylic, oil, and fabric on canvas',
  },
  {
    id: 2262,
    name: 'Gravure aquarellée',
  },
  {
    id: 2263,
    name: 'Paire de Gravures ',
  },
  {
    id: 2264,
    name: 'Gravure ',
  },
  {
    id: 2265,
    name: 'Gravure',
  },
  {
    id: 2266,
    name: 'Lithographie sur papier',
  },
  {
    id: 2267,
    name: 'Estampes aquarellées',
  },
  {
    id: 2268,
    name: 'Aquarelles sur papier',
  },
  {
    id: 2269,
    name: 'Paire de Gravures',
  },
  {
    id: 2270,
    name: 'PaireGravures aquarellées',
  },
  {
    id: 2271,
    name: 'Gravure (rousseurs)',
  },
  {
    id: 2272,
    name: '7 Illustrations sur papier',
  },
  {
    id: 2273,
    name: 'Tempéra et or sur bois',
  },
  {
    id: 2274,
    name: 'Tempéra sur bois ',
  },
  {
    id: 2275,
    name: 'Tempéra et or sur bois ',
  },
  {
    id: 2276,
    name: 'Tempéra sur bois',
  },
  {
    id: 2277,
    name: 'Tempéra et sur bois',
  },
  {
    id: 2278,
    name: 'Tempéra et or ur bois',
  },
  {
    id: 2279,
    name: 'Tempéra  sur bois',
  },
  {
    id: 2280,
    name: 'Tempéra et nacre sur bois',
  },
  {
    id: 2281,
    name: 'Lithographie sur métal',
  },
  {
    id: 2282,
    name: 'Nacre sculpté et cadre bois',
  },
  {
    id: 2283,
    name: 'Nacre sculpté',
  },
  {
    id: 2284,
    name: 'Email sur bronze doré',
  },
  {
    id: 2285,
    name: 'Print',
  },
  {
    id: 2286,
    name: 'Argenterie',
  },
  {
    id: 2287,
    name: 'Argent massif',
  },
  {
    id: 2288,
    name: 'Argent massif ',
  },
  {
    id: 2289,
    name: 'Argent',
  },
  {
    id: 2290,
    name: 'France, Paris',
  },
  {
    id: 2291,
    name: 'Argent  et Vermeil',
  },
  {
    id: 2292,
    name: 'Argent masif',
  },
  {
    id: 2293,
    name: 'Argent & Argenterie',
  },
  {
    id: 2294,
    name: 'Argent et Vermeil',
  },
  {
    id: 2295,
    name: 'Bronze doré',
  },
  {
    id: 2296,
    name: 'Bronze argenté',
  },
  {
    id: 2297,
    name: 'Etain ',
  },
  {
    id: 2298,
    name: 'Etain et Cristal',
  },
  {
    id: 2299,
    name: 'Argent & Bois',
  },
  {
    id: 2300,
    name: 'Cuivre',
  },
  {
    id: 2301,
    name: '_',
  },
  {
    id: 2302,
    name: 'Cuivre argenté',
  },
  {
    id: 2303,
    name: 'Régule',
  },
  {
    id: 2304,
    name: 'Fer forgé',
  },
  {
    id: 2305,
    name: 'Marbre',
  },
  {
    id: 2306,
    name: 'Pierre',
  },
  {
    id: 2307,
    name: 'Marbre & Bronze',
  },
  {
    id: 2308,
    name: 'Marbre peint',
  },
  {
    id: 2309,
    name: 'Plâtre',
  },
  {
    id: 2310,
    name: 'Résine & Marbre',
  },
  {
    id: 2311,
    name: 'Résine & Bois',
  },
  {
    id: 2312,
    name: 'Résine patinée',
  },
  {
    id: 2313,
    name: 'Bronze patiné',
  },
  {
    id: 2314,
    name: 'Stuc patiné',
  },
  {
    id: 2315,
    name: 'Résine peinte',
  },
  {
    id: 2316,
    name: 'Ivoire peint',
  },
  {
    id: 2317,
    name: 'Ivoire ',
  },
  {
    id: 2318,
    name: 'Céramique',
  },
  {
    id: 2319,
    name: 'Porcelaine',
  },
  {
    id: 2320,
    name: 'Biscuits',
  },
  {
    id: 2321,
    name: 'Bois sculpté',
  },
  {
    id: 2322,
    name: 'Cristal',
  },
  {
    id: 2323,
    name: 'Opaline',
  },
  {
    id: 2324,
    name: 'Bois sculpté et doré ',
  },
  {
    id: 2325,
    name: 'Bois doré et marbre ',
  },
  {
    id: 2326,
    name: 'Bois sculpté  et soie ',
  },
  {
    id: 2327,
    name: 'Bois sculpté et velours',
  },
  {
    id: 2328,
    name: 'Bois marqueté et marbre',
  },
  {
    id: 2329,
    name: 'Bois sculpté doré et marbre',
  },
  {
    id: 2330,
    name: 'Bois sculpté doré & tapisserie',
  },
  {
    id: 2331,
    name: 'Bois sculpté doré et tissu',
  },
  {
    id: 2332,
    name: 'Bois marqueté et bronze doré',
  },
  {
    id: 2333,
    name: 'Bois sculpté laqué et peint',
  },
  {
    id: 2334,
    name: 'Bois sculpté et marbre',
  },
  {
    id: 2335,
    name: 'Bois sculpté et cannage',
  },
  {
    id: 2336,
    name: 'Bois marqueté et bronze',
  },
  {
    id: 2337,
    name: 'Bois sculpté doré et soie',
  },
  {
    id: 2338,
    name: 'Bois sculpté doré et cannage',
  },
  {
    id: 2339,
    name: 'Bois sculpté et tissu',
  },
  {
    id: 2340,
    name: 'Bois sculpté et doré',
  },
  {
    id: 2341,
    name: 'Bois  sculpté et cannage',
  },
  {
    id: 2342,
    name: 'Bois sculpté et vitre',
  },
  {
    id: 2343,
    name: 'Bois sculpté laqué et bronze',
  },
  {
    id: 2344,
    name: 'Bois sculpté laqué et velours',
  },
  {
    id: 2345,
    name: 'Bois sculpté et bronze doré',
  },
  {
    id: 2346,
    name: 'Bois sculpté doré et peint',
  },
  {
    id: 2347,
    name: 'Bois marqueté',
  },
  {
    id: 2348,
    name: 'Bois sculpté et cuir',
  },
  {
    id: 2349,
    name: 'Bois sculpté et céramique',
  },
  {
    id: 2350,
    name: 'Bois sculpté et cuivre clouté',
  },
  {
    id: 2351,
    name: 'Bois sculpté et gravé',
  },
  {
    id: 2352,
    name: 'Bronze doré et cristal',
  },
  {
    id: 2353,
    name: 'Bronze doré et laqué',
  },
  {
    id: 2354,
    name: 'Bronze doré et verre',
  },
  {
    id: 2355,
    name: 'Métal',
  },
  {
    id: 2356,
    name: 'Cuivre&Bois',
  },
  {
    id: 2357,
    name: 'Métal&Bois',
  },
  {
    id: 2358,
    name: 'Résinedorée',
  },
  {
    id: 2359,
    name: 'Tissu',
  },
  {
    id: 2360,
    name: 'Corne',
  },
  {
    id: 2361,
    name: 'Résine',
  },
  {
    id: 2362,
    name: 'Cuir',
  },
  {
    id: 2363,
    name: 'Livres',
  },
  {
    id: 2364,
    name: 'Tapis',
  },
  {
    id: 2365,
    name: 'Tapis Coussin',
  },
  {
    id: 2366,
    name: 'Tapis Kilim',
  },
  {
    id: 2367,
    name: 'Textile',
  },
  {
    id: 2368,
    name: 'Tapisserie',
  },
  {
    id: 2369,
    name: 'Décollage on canvas',
  },
  {
    id: 2370,
    name: 'watercolour and ink on paper',
  },
  {
    id: 2371,
    name: 'watercolour and oil on paper',
  },
  {
    id: 2372,
    name: 'ink and pencil on paper ',
  },
  {
    id: 2373,
    name: 'aluminium sculpture ',
  },
  {
    id: 2374,
    name: 'acrylic on paper ',
  },
  {
    id: 2375,
    name: 'acrylic on canvas ',
  },
  {
    id: 2376,
    name: 'print on paper',
  },
  {
    id: 2377,
    name: 'oil on canvas mounted on board ',
  },
  {
    id: 2378,
    name: 'lithography',
  },
  {
    id: 2379,
    name: 'mixed media on paper',
  },
  {
    id: 2393,
    name: 'mixed media on cardboard',
  },
  {
    id: 2394,
    name: 'acrylic on jute mounted on board',
  },
  {
    id: 2395,
    name: 'pastel on cardboard ',
  },
  {
    id: 2396,
    name: 'pencil on canson',
  },
  {
    id: 2397,
    name: 'gouache on paper',
  },
  {
    id: 2398,
    name: 'oil on cardboard mounted on canvas',
  },
  {
    id: 2399,
    name: 'giclée print.         Set of 7',
  },
  {
    id: 2400,
    name: 'guoache on paper',
  },
  {
    id: 2401,
    name: 'oil and pastel on paper',
  },
  {
    id: 2402,
    name: 'painted PVC',
  },
  {
    id: 2403,
    name: 'print on paper ',
  },
  {
    id: 2404,
    name: 'cardboard mounted on canvas',
  },
  {
    id: 2405,
    name: 'marker on canson paper',
  },
  {
    id: 2406,
    name: 'acrylic on jute canvas',
  },
  {
    id: 2407,
    name: 'wooden sculpture',
  },
  {
    id: 2408,
    name: 'oil on cadastral paper',
  },
  {
    id: 2409,
    name: 'dry pastel on paper',
  },
  {
    id: 2410,
    name: 'bronze sculpture',
  },
  {
    id: 2411,
    name: 'marble sculpture',
  },
  {
    id: 2412,
    name: 'acrylic on canson paper',
  },
  {
    id: 2413,
    name: 'stencil and Acrylic on paper',
  },
  {
    id: 2414,
    name: 'mixed media and acrylic on canvas',
  },
  {
    id: 2415,
    name: 'oil on compressed wood',
  },
  {
    id: 2416,
    name: 'gouache on cardboard',
  },
  {
    id: 2417,
    name: 'watercolour on arche paper',
  },
  {
    id: 2418,
    name: 'baselt sculpture',
  },
  {
    id: 2419,
    name: 'oil on linen canvas',
  },
  {
    id: 2420,
    name: 'archival print on canvas',
  },
  {
    id: 2421,
    name: 'Oil and mixed media on canvas',
  },
  {
    id: 2422,
    name: 'painted metal and resin',
  },
  {
    id: 2423,
    name: 'lithograph in colours ',
  },
  {
    id: 2424,
    name: 'Llthograph in colours ',
  },
  {
    id: 2425,
    name: 'print on fabric',
  },
  {
    id: 2426,
    name: 'poster',
  },
  {
    id: 2427,
    name: 'poster ',
  },
  {
    id: 2428,
    name: 'lithograph on paper',
  },
  {
    id: 2429,
    name: 'serigraph in colours',
  },
  {
    id: 2430,
    name: 'screen print in colours',
  },
  {
    id: 2431,
    name: 'photolithograph on BFK Rives paper',
  },
  {
    id: 2432,
    name: 'silkscreen',
  },
  {
    id: 2433,
    name: 'bronze sculpture with marble base',
  },
  {
    id: 2434,
    name: "lithograph in colours.  printed on vélin d'Arches paper",
  },
  {
    id: 2435,
    name: "lithograph in colours printed on vélin d'Arches paper in eight colours",
  },
  {
    id: 2436,
    name: "lithograph in colours printed on vélin d'Arches paper",
  },
  {
    id: 2437,
    name: "print on vélin d'Arches paper",
  },
  {
    id: 2438,
    name: 'pigmented giclée print on Hahnemühle canvas',
  },
  {
    id: 2440,
    name: 'Indian ink on paper laid down on canvas',
  },
  {
    id: 2441,
    name: 'Indian ink and gold leaf on paper laid down on canvas',
  },
  {
    id: 2442,
    name: 'mixed media on paper mounted on canvas',
  },
  {
    id: 2443,
    name: 'acrylic ink on paper mounted on canvas',
  },
  {
    id: 2444,
    name: 'Chinese ink on paper mounted on canvas',
  },
  {
    id: 2445,
    name: 'acrylic ink on cotton paper mounted on canvas',
  },
  {
    id: 2446,
    name: 'acrylic ink on paper',
  },
  {
    id: 2447,
    name: 'oil on board ',
  },
  {
    id: 2448,
    name: 'copper engraving \n(dry point and chine collé on paper)',
  },
  {
    id: 2449,
    name: 'paper, soft pastel, charcoal, pencil and fibre pen',
  },
  {
    id: 2450,
    name: 'drawing and acid on colored paper',
  },
  {
    id: 2451,
    name: 'indian ink on paper (triptyche)',
  },
  {
    id: 2452,
    name: 'indian ink on paper ',
  },
  {
    id: 2453,
    name: 'inkjet print on fine art baryta paper hahnemühle',
  },
  {
    id: 2454,
    name: 'inkjet print on museo max',
  },
  {
    id: 2455,
    name: 'silkscreen on paper ',
  },
  {
    id: 2456,
    name: 'print on linen, wood and brass',
  },
  {
    id: 2457,
    name: 'polaroid photographs: \ninkjet print on fine art paper \nnatural wooden american box\naluminium mounting and no glass',
  },
  {
    id: 2458,
    name: 'iphone photography',
  },
  {
    id: 2459,
    name: 'photographs medium-format negatives scanned',
  },
  {
    id: 2460,
    name: 'photograph \ninkjet print on fine art paper natural wooden american box \naluminium mounting and no glass',
  },
  {
    id: 2461,
    name: 'two photographs \ninkjet print on fine art paper natural wooden american box \naluminium mounting and no glass',
  },
  {
    id: 2462,
    name: 'collage, photography- pigment print on epson enhanced matte paper',
  },
  {
    id: 2463,
    name: 'photograph              fineart inkjet print on archival paper (hahnemühle 310 gsm)',
  },
  {
    id: 2464,
    name: 'FineArt inkjet print on archival paper (Hahnemühle 300 gsm) mounted on dibond ',
  },
  {
    id: 2465,
    name: 'braided sheep skin',
  },
  {
    id: 2466,
    name: 'double copper pendant related to the myth of Juno',
  },
  {
    id: 2467,
    name: 'simple copper pendant related to the myth of Juno',
  },
  {
    id: 2468,
    name: 'limestone, iroko wood and stainless steel',
  },
  {
    id: 2469,
    name: 'ceramic with redox glaze',
  },
  {
    id: 2470,
    name: 'clay sculpture, stoneware, coiled, raku-fired',
  },
  {
    id: 2471,
    name: 'stoneware, white glaze',
  },
  {
    id: 2472,
    name: 'set of 5, candle holder, hand carved Nero Marquina marble, made in Italy ',
  },
  {
    id: 2473,
    name: 'clay and onyx marble, handmade in Italy',
  },
  {
    id: 2474,
    name: 'stoneware , white glaze.',
  },
  {
    id: 2475,
    name: 'sculpture, wood, cardboard and acrylic paint ',
  },
  {
    id: 2476,
    name: 'UV ink on stone',
  },
  {
    id: 2477,
    name: 'resin sculpture',
  },
  {
    id: 2478,
    name: 'hand-carved wood cast in concrete with ceramic handmade butterflies',
  },
  {
    id: 2479,
    name: "copper applied in a cold process on solid wood using an innovative technique specific to 'Bad Creations'",
  },
  {
    id: 2480,
    name: 'wood dipped in liquid metal',
  },
  {
    id: 2481,
    name: 'Fireclay',
  },
  {
    id: 2482,
    name: '8 mm aluminium',
  },
  {
    id: 2483,
    name: 'Wood and metal structure, covered with velours, and the handles of solid oak',
  },
  {
    id: 2484,
    name: 'acrylic on plywood and jute',
  },
  {
    id: 2485,
    name: 'pen and acrylic on plywood and wool with iron',
  },
  {
    id: 2486,
    name: 'cortex GRP, dichroic film, paint, MDF',
  },
  {
    id: 2487,
    name: 'sunlight and carbon on archival paper',
  },
  {
    id: 2488,
    name: 'neon',
  },
  {
    id: 2489,
    name: 'NFT',
  },
  {
    id: 2490,
    name: 'felt pen on paper',
  },
  {
    id: 2491,
    name: 'shiny lacquered solidwood in Burgundy',
  },
  {
    id: 2492,
    name: 'shiny lacquered solidwood in dark green',
  },
  {
    id: 2493,
    name: 'embroidery and appliqués on mixed textiles based on a photomontage by Lara Baladi',
  },
  {
    id: 2494,
    name: 'wallpaper and neon',
  },
  {
    id: 2495,
    name: 'Fineart Matte printed on Dibond',
  },
  {
    id: 2496,
    name: 'Photography, Fineart Matte Printed on Dibond',
  },
  {
    id: 2497,
    name: 'Photography, Fineart paper',
  },
  {
    id: 2498,
    name: 'resin sculpture, marble powder',
  },
  {
    id: 2499,
    name: 'sculpture, palm leaves',
  },
  {
    id: 2500,
    name: 'chromaluxe aluminum printed on archival ',
  },
  {
    id: 2501,
    name: 'mixed media acrylic on wood',
  },
  {
    id: 2502,
    name: 'collage and mixed media on linen',
  },
  {
    id: 2503,
    name: 'Ball pen on paper',
  },
  {
    id: 2504,
    name: 'Oil on canvas ',
  },
  {
    id: 2505,
    name: 'B/w photography',
  },
  {
    id: 2506,
    name: 'Black ink on paper ',
  },
  {
    id: 2507,
    name: 'Charcoal on paper',
  },
  {
    id: 2508,
    name: 'Graphite and acrylic on paper ',
  },
  {
    id: 2509,
    name: 'Acrylic on canvas',
  },
  {
    id: 2510,
    name: 'Acrylic & oil pastel on canvas',
  },
  {
    id: 2511,
    name: 'Mixed media on canvas ',
  },
  {
    id: 2512,
    name: 'Acrylic on canvas  (stretched canvas)',
  },
  {
    id: 2513,
    name: 'Acrylic on linen  (stretched canvas)',
  },
  {
    id: 2514,
    name: 'Mixed media with oil (stretched canvas)',
  },
  {
    id: 2515,
    name: 'Acrylic on canvas ',
  },
  {
    id: 2516,
    name: 'Acrylic on Jute',
  },
  {
    id: 2517,
    name: 'Mixed media & collage ',
  },
  {
    id: 2518,
    name: 'Graphite on paper ',
  },
  {
    id: 2519,
    name: "Ink on l'art du papier, paris paper",
  },
  {
    id: 2520,
    name: 'Photography B&W ',
  },
  {
    id: 2521,
    name: 'Hand carved wood (rose wood and Erable) upholstered seat and steel legs',
  },
  {
    id: 2522,
    name: 'gouache and archival ink on paper',
  },
  {
    id: 2523,
    name: 'Print on Cardboard',
  },
  {
    id: 2524,
    name: 'iron sculpture ',
  },
  {
    id: 2525,
    name: 'Photography colored ',
  },
  {
    id: 2526,
    name: 'Painted PVC',
  },
  {
    id: 2527,
    name: 'Mixed media on paper 300gsm',
  },
  {
    id: 2528,
    name: 'Mixed media on paper 220gsm',
  },
  {
    id: 2529,
    name: 'Mixed media on paper',
  },
  {
    id: 2530,
    name: 'Maple and plastic laminate ',
  },
  {
    id: 2531,
    name: 'Encres de Chine et acryliques sur papier coton',
  },
  {
    id: 2532,
    name: 'Lacre steel ',
  },
  {
    id: 2533,
    name: 'Watercolor on arches paper  300g',
  },
  {
    id: 2534,
    name: 'Acrylic & oil on canvas ',
  },
  {
    id: 2535,
    name: 'Oil & serigraph on canvas',
  },
  {
    id: 2536,
    name: 'Acrylic ink on origami paper ',
  },
  {
    id: 2537,
    name: 'Acrylic on paper ',
  },
  {
    id: 2538,
    name: 'Acrylic & oil sticks on jute ',
  },
  {
    id: 2539,
    name: 'Print on canvas',
  },
  {
    id: 2540,
    name: 'Acrylic on jute canvas',
  },
  {
    id: 2541,
    name: 'Gouache on canson',
  },
  {
    id: 2542,
    name: 'oil on canvas mounted on cardboard',
  },
  {
    id: 2543,
    name: 'book, ink on paper',
  },
  {
    id: 2544,
    name: 'mixed media on board',
  },
  {
    id: 2545,
    name: 'oil and gouache on paper',
  },
  {
    id: 2546,
    name: 'wooden sculpture\nunique piece',
  },
  {
    id: 2547,
    name: 'aluminium and patina sculpture\nunique piece',
  },
  {
    id: 2548,
    name: 'sculpture;\nbrass base and top;\nmarble powder\n ',
  },
  {
    id: 2549,
    name: 'bronze sculpture  (black and green patina) ',
  },
  {
    id: 2550,
    name: 'wooden sculpture with mixed media',
  },
  {
    id: 2551,
    name: '\ncopper sculpture\n ',
  },
  {
    id: 2552,
    name: 'mixed media and collage on canvas',
  },
  {
    id: 2553,
    name: 'acrylic on board ',
  },
  {
    id: 2554,
    name: 'oil on canvs',
  },
  {
    id: 2555,
    name: 'mixed media on canvas ',
  },
  {
    id: 2556,
    name: 'acrylic on paper mounted on canvas ',
  },
  {
    id: 2557,
    name: 'acrylic and crayon on canvas',
  },
  {
    id: 2558,
    name: 'tempera and crayon on paper',
  },
  {
    id: 2559,
    name: 'stainless steel',
  },
  {
    id: 2560,
    name: 'wood cut print',
  },
  {
    id: 2561,
    name: 'diptych\noil on canvas',
  },
  {
    id: 2562,
    name: 'photographic, acrylic on paper',
  },
  {
    id: 2563,
    name: 'work on paper',
  },
  {
    id: 2564,
    name: 'cherry wood',
  },
  {
    id: 2565,
    name: 'print on 100% cotton paper',
  },
  {
    id: 2566,
    name: ' giclée print with pigmented ink on fine art paper 308 gsm2',
  },
  {
    id: 2567,
    name: 'oil on mazonite',
  },
  {
    id: 2568,
    name: 'acrylic on paper mounted on board',
  },
  {
    id: 2569,
    name: 'acrylic and ink on canvas',
  },
  {
    id: 2570,
    name: 'phototransfer, acrylic on paper',
  },
  {
    id: 2571,
    name: 'flowmaster pen on carton',
  },
  {
    id: 2572,
    name: 'self hardening clay, resin, flower petal and paper',
  },
  {
    id: 2573,
    name: "etching on Caran d'Ache paper",
  },
  {
    id: 2574,
    name: "etching on Caran d'Ache paper retouched by the artist. \nsigned by hand 'a photo print of a Burin, treated with fetlt' (centre). ",
  },
  {
    id: 2575,
    name: 'giclée on paper',
  },
  {
    id: 2576,
    name: 'silkscreen on paper',
  },
  {
    id: 2577,
    name: 'iron scuplture',
  },
  {
    id: 2578,
    name: 'analogue assemblage',
  },
  {
    id: 2579,
    name: 'etching and aquatint on paper',
  },
  {
    id: 2580,
    name: 'digital print on archive paper',
  },
  {
    id: 2581,
    name: 'aquatint',
  },
  {
    id: 2582,
    name: 'lithograph ',
  },
  {
    id: 2583,
    name: 'monoprint',
  },
  {
    id: 2584,
    name: 'painted resin',
  },
  {
    id: 2585,
    name: 'offprint',
  },
  {
    id: 2586,
    name: 'Giclée on canvas',
  },
  {
    id: 2587,
    name: 'acrylic and glitter on canvas',
  },
  {
    id: 2588,
    name: 'acrylic, oil and oil pastel on canvas',
  },
  {
    id: 2589,
    name: 'acrylic and oil pastel marouflage on canvas',
  },
  {
    id: 2590,
    name: 'acrylic and spray on canvas',
  },
  {
    id: 2591,
    name: 'NFT',
  },
  {
    id: 2592,
    name: 'acrylic spray on linen canvas',
  },
  {
    id: 2593,
    name: 'steel, resin & wood',
  },
  {
    id: 2594,
    name: 'Beech wood',
  },
  {
    id: 2595,
    name: 'mixed media sculpture',
  },
  {
    id: 2596,
    name: 'Indian ink & acrylic on wood',
  },
  {
    id: 2597,
    name: 'ceramic glazing ',
  },
  {
    id: 2598,
    name: 'Oil, Indian ink and collage on canvas',
  },
  {
    id: 2599,
    name: 'Oil, acrylic & Indian ink on japan paper mounted on canvas',
  },
  {
    id: 2600,
    name: 'Oil, acrylic, indian ink and collage on canvas',
  },
  {
    id: 2601,
    name: 'Oil & Indian ink on bamboo paper mounted on canvas',
  },
  {
    id: 2602,
    name: ' Indian ink, acrylic & coffee on bamboo paper mounted on canvas',
  },
  {
    id: 2603,
    name: 'Digital print',
  },
  {
    id: 2604,
    name: 'pastel on paper ',
  },
  {
    id: 2605,
    name: 'Brass',
  },
  {
    id: 2606,
    name: 'Basalt',
  },
  {
    id: 2618,
    name: 'watercolour on canvas paper',
  },
  {
    id: 2619,
    name: 'oil and mixed media on canvas',
  },
  {
    id: 2620,
    name: 'plaster,\nwaterproof felt pen\nunique piece',
  },
  {
    id: 2621,
    name: 'acrylic on cardboard mounted on canvas',
  },
  {
    id: 2622,
    name: 'white marble\nunique piece',
  },
  {
    id: 2623,
    name: 'olive tree wood',
  },
  {
    id: 2624,
    name: 'marble\nunique piece',
  },
  {
    id: 2625,
    name: 'metal sculpture and wooden box',
  },
  {
    id: 2626,
    name: 'mixed media on wooden log (painted on 4 sides and the top)\nunique piece',
  },
  {
    id: 2627,
    name: 'hand-painted engraving mounted on board',
  },
  {
    id: 2628,
    name: 'mixed media on rice paper',
  },
];
