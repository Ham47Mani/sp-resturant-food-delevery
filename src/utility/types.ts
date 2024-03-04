// ====================== Mobile Navbar Type ======================
export type NAVMENULINKS =  {
  id: number;
  name: string;
  link: string
}

// ====================== Home Slide Data Types ======================
export type HOMESLIDEDATA =  {
  id: number;
  title: string;
  image: string
}

// ====================== Features Product Data Types ======================
export type PRODUCT = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

// ====================== Order Data Types ======================
export type ORDER = {
  id: string;
  userEmail: string;
  price: number;
  products: CARTITEM[];
  status: string;
  createAt: Date;
  intent_id?: string;
}

// ====================== Cart Item Data Types ======================
export type CARTITEM = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
}

// ====================== Cart Type Data Types ======================
export type CARTTYPE = {
  products: CARTITEM[],
  totalItems: number,
  totalPrice: number
}

// ====================== Menu Page Data Types ======================
export type MENUCATEGORY = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

// ====================== Response Types ======================
export type DATARESPONSE = {
  message: string;
  data: any[]
}

// ====================== State Action Types ======================
export type STATEACTIONTYPES = {
  addToCart: (item: CARTITEM) => void;
  removeFromCart: (item: CARTITEM) => void;
}