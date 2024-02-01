import { ColumnType } from 'antd/lib/table';
import { formatNumber } from '../../../../utils';
import { Image } from 'antd';

export const columnTableProps = ({}): ColumnType<any>[] => {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 20,
      responsive: ['lg', 'md', 'sm'],
      sorter: (a, b) => b.id - a.id,
    },
    {
      title: 'Name',
      width: 300,
      dataIndex: 'name',
      sorter: (a, b) => {
        if (!a.name || !b.name) return;
        return b.uuid.localeCompare(a.name);
      },
    },
    {
      title: 'Result',
      width: 300,
      dataIndex: 'ocr_result',
    },
    {
      title: 'OCR Time',
      dataIndex: 'ocr_time',
      responsive: ['lg', 'md', 'sm'],
    },
    {
      title: 'Origin Image',
      dataIndex: 'origin_image_path',
      render: (value) => {
        return <Image src={value} />;
      },
    },
    {
      title: 'Yolo Image',
      dataIndex: 'yolo_image_path',
      render: (value) => {
        return <Image src={value} />;
      },
    },
  ];
};
