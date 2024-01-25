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
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

// ====================== Menu Page Data Types ======================
export type MENUCATEGORY = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];