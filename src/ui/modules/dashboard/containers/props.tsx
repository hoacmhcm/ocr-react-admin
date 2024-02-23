import { ColumnType } from 'antd/lib/table';
import { formatNumber } from '../../../../utils';
import { Image } from 'antd';

export const columnTableProps = ({}): ColumnType<any>[] => {
  return [
    {
      title: 'Tên người dùng',
      width: 150,
      dataIndex: 'name',
      sorter: (a, b) => {
        if (!a.name || !b.name) return;
        return b.uuid.localeCompare(a.name);
      },
    },
    {
      title: 'Kết quả OCR',
      width: 300,
      dataIndex: 'ocr_result',
    },
    {
      title: 'Thời gian dự đoán (giây)',
      width: 150,
      dataIndex: 'ocr_time',
      responsive: ['lg', 'md', 'sm'],
    },
    {
      title: 'Ảnh gốc',
      dataIndex: 'origin_image_path',
      render: (value) => {
        return <Image src={value} />;
      },
    },
    {
      title: 'Ảnh YOLO',
      dataIndex: 'yolo_image_path',
      render: (value) => {
        return <Image src={value} />;
      },
    },
  ];
};
