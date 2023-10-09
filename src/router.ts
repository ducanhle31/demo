export const menus = [
  {
    path: "/", // the url
    title: "Trang chủ",
  },
  {
    path: "/gioi-thieu", // the url
    title: "Giới thiệu",
  },

  {
    path: "#", // the url
    title: "Ngành học",
    childs: [
      {
        path: "/nganh-quan-tri-kinh-doanh",
        title: "Quản trị kinh doanh",
      },

      {
        path: "/nganh-ke-toan",
        title: "Kế toán",
      },
    ],
  },
  {
    path: "/lich-khai-giang", // the url
    title: "Lịch khai giảng",
  },
  {
    path: "/lien-he", // the url
    title: "Liên hệ",
  },
  {
    path: "/tin-tuc", // the url
    title: "Tin tức", // view rendered
  },
];
