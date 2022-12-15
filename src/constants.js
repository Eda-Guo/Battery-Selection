export const DEVICES = [
    {"id": 1, "name": "MegapackXL", "width": 40, "height": 10, "energy": 4, "cost": 120000, "date": 2022},
    {"id": 2, "name": "Megapack2", "width": 30, "height": 10, "energy": 3, "cost": 80000, "date": 2021},
    {"id": 3, "name": "Megapack", "width": 30, "height": 10, "energy": 2, "cost": 50000, "date": 2005},
    {"id": 4, "name": "PowerPack", "width": 10, "height": 10, "energy": 1, "cost": 10000, "date": 2000},
    
];

export const TRANSFORMER= [
    {"id": 1, "name": "Transformer", "width": 10, "height": 10, "energy": -0.5, "cost": 10000}
]


export const INITCART = { "MegapackXL": 0, "Megapack2": 0, "Megapack": 0, "PowerPack": 0, "Transformer": 0};

export const FACTOR = 7;

export const COLOR = { "MegapackXL": "#d97373", "Megapack2": "#D2B48C", "Megapack": "#629ae3", "PowerPack": "#75d973", "Transformer": "#bdbdbd"};