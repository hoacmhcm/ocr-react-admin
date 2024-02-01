import React, { useEffect, useMemo, useState } from 'react';

import { Button, Divider } from 'antd';
import { useSelector } from 'react-redux';

import { columnTableProps, metaFilterOverview } from './props';

import { useDashboard } from '../../../../adapters/appService/dashboard.service';
import { configSelector } from '../../../../adapters/redux/selectors/config';
import Card from '../../../shared/card';
import BaseFilter from '../../../shared/forms/baseFilter';
import Loading from '../../../shared/loading';
import { formatNumber, getDefaultTimeRange } from '../../../../utils';
import '../../../assets/scss/dashboard.scss';
import BaseTable from '../../../shared/tables';
import useList from '../../../../hooks/useList';
import { PAGE_SIZE_OPTIONS } from '../../../../constant';

function Dashboard() {
  const { getTable } = useDashboard();

  const initialValues = {
    ...getDefaultTimeRange(),
  };

  const formatFilter = useMemo(
    () => (filters) => {
      const { picker, ...rest } = filters;
      let from: number | null = null;
      let to: number | null = null;
      if (picker) {
        from = new Date(picker[0]).setHours(0, 0, 0, 0);
        to = new Date(picker[1]).setHours(23, 59, 59, 0);
      }

      return {
        ...rest,
        from: from ? from : rest.from,
        to: to ? to : rest.to,
      };
    },
    []
  );

  const [list, { onPageChange, onFilterChange }] = useList({
    fetchFn: async (args) => {
      const filters = formatFilter(args);
      return await getTable(filters);
    },
    defaultFilters: initialValues,
  });

  console.log(list);

  return (
    <>
      {/*<Card className="dashboard-filter card-overview" title="Filter">*/}
      {/*  <Divider />*/}
      {/*  <div className="action-container">*/}
      {/*    <BaseFilter*/}
      {/*      loading={loading}*/}
      {/*      meta={metaFilterOverview({*/}
      {/*        partner_id,*/}
      {/*        tracking_status,*/}
      {/*        initialValues,*/}
      {/*      })}*/}
      {/*      filterOnChange*/}
      {/*      showSubmitButton={false}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</Card>*/}

      <Card className="dashboard-card" title="OCR Result">
        <div className="table-container">
          <BaseTable
            idKey="id"
            columns={columnTableProps({})}
            data={list}
            paginationProps={{
              showSizeChanger: true,
              pageSizeOptions: PAGE_SIZE_OPTIONS,
            }}
            onChange={onPageChange}
          />
        </div>
      </Card>
    </>
  );
}

export default Dashboard;
