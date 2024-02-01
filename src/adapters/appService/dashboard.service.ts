import { formatResponse, getWithPath } from '../api.http';

import { ResponseData } from '../../constant';
import API from '../../constant/api';
import { Filter } from '../../constant/type';
import { mockDashboard } from '~/mock/dashboard.mock';

export function useDashboard() {
  return {
    async getTable(filter: Filter): Promise<ResponseData<any>> {
      const data = await getWithPath(API.DASHBOARD.GET.TABLE, filter);
      // const data = await mockDashboard().getChart();
      console.log(data);
      return formatResponse(data);
    },
  };
}
