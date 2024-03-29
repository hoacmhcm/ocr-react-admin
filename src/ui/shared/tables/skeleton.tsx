import { Table, Skeleton } from 'antd';

type SkeletonTableProps = {
  columns?: any;
  rowCount: number;
};

const SkeletonTable = (props: SkeletonTableProps) => {
  const { columns, rowCount = 20, ...rest } = props;
  return (
    <Table
      {...rest}
      rowKey="key"
      pagination={false}
      dataSource={[...Array(rowCount)].map((_, index) => ({
        key: `key${index}`,
      }))}
      columns={columns?.map((column) => {
        return {
          ...column,
          render: function renderPlaceholder() {
            return (
              <Skeleton key={column.dataIndex} title={true} paragraph={false} />
            );
          },
        };
      })}
    />
  );
};

export default SkeletonTable;
