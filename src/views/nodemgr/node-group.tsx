import { Button, Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import { FC } from 'react';

import { apiNodeGroupList } from '~/api/ccenter-app-nodemgr/node-group.api';
import { usePagination } from '~/hooks/usePagination';
import { NodeGroupItem } from '~/interface/ccenter-app-nodemgr/node-group.interface';

const NodeGroupListPage: FC = () => {
  const { tableData, loading } = usePagination({
    apiMethod: apiNodeGroupList,
    resultListKeyPath: 'NodeGroupList',
    pageSize: 100,
  });

  return (
    <Table
      style={{ width: 500 }}
      rowKey="NodeGroupId"
      bordered
      columns={columns}
      dataSource={tableData}
      pagination={false}
      loading={loading}
    />
  );
};

const columns: ColumnProps<NodeGroupItem>[] = [
  {
    title: '节点分组',
    dataIndex: 'NodeGroupName',
    render: (data, row) => (
      <div>
        <span>{data}</span>
        <span>{row.IsDefault === 'Y' ? '（默认分组）' : ''}</span>
      </div>
    ),
  },
  {
    title: '操作',
    width: 160,
    render(_, _row) {
      return <Button type="primary">修改</Button>;
    },
  },
];

export default NodeGroupListPage;