export const categoryRules = [
  {
    required: true,
    message: 'Vui lòng chọn phân loại',
  },
];
export const nameRules = [
  {
    required: true,
    message: 'Vui lòng nhập tên sản phẩm',
  },
];
export const descriptionRules = [
  {
    required: true,
    message: 'Vui lòng nhập mô tả',
  },
  {
    min: 5,
    message: 'Vui lòng mô tả ít nhất 5 kí tự',
  },
];
