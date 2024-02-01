import { ResponseData } from '../constant';
import { mockApi } from './mock.helper';
import { PartnerType, StateStatus } from '../constant/enum';

const getTotalRequest = (data) => {
  return data.reduce((acc, cur) => acc + cur.value, 0);
};

const getRandomTotalData = (successData, failData) => {
  const totalData = [];
  for (let i = 0; i < successData.length; i++) {
    totalData.push({
      date: successData[i].date,
      value: successData[i].value + failData[i].value,
    });
  }
  return totalData;
};

export function mockDashboard() {
  return {
    async getConfig(): Promise<ResponseData<any>> {
      return mockApi({
        partner_id: [
          {
            key: 'UNKHOWN',
            value: 'UNKHOWN',
          },
          {
            key: 'SHINHAN',
            value: 'SHINHAN',
          },
          {
            key: 'VP_BANK',
            value: 'VP_BANK',
          },
          {
            key: 'CITIBANK_VENDOR',
            value: 'CITIBANK_VENDOR',
          },
          {
            key: 'SC',
            value: 'SC',
          },
          {
            key: 'EASY_CREDIT',
            value: 'EASY_CREDIT',
          },
          {
            key: 'FECREDIT',
            value: 'FECREDIT',
          },
          {
            key: 'SHINHAN_FINANCE',
            value: 'SHINHAN_FINANCE',
          },
          {
            key: 'UOB',
            value: 'UOB',
          },
          {
            key: 'VIB',
            value: 'VIB',
          },
          {
            key: 'TRUSTING_SOCIAL',
            value: 'TRUSTING_SOCIAL',
          },
          {
            key: 'COMB',
            value: 'COMB',
          },
          {
            key: 'LFVN',
            value: 'LFVN',
          },
          {
            key: 'HSBC',
            value: 'HSBC',
          },
          {
            key: 'TPBANK_FICO',
            value: 'TPBANK_FICO',
          },
          {
            key: 'SACOMBANK',
            value: 'SACOMBANK',
          },
          {
            key: 'YUANTA',
            value: 'YUANTA',
          },
          {
            key: 'UBANK',
            value: 'UBANK',
          },
          {
            key: 'TPBANK_DICO',
            value: 'TPBANK_DICO',
          },
          {
            key: 'PVI',
            value: 'PVI',
          },
          {
            key: 'UNKNOWN_PARTNER_3',
            value: 'UNKNOWN_PARTNER_3',
          },
          {
            key: 'UNKNOWN_PARTNER_4',
            value: 'UNKNOWN_PARTNER_4',
          },
          {
            key: 'UNKNOWN_PARTNER_5',
            value: 'UNKNOWN_PARTNER_5',
          },
          {
            key: 'UNKNOWN_PARTNER_6',
            value: 'UNKNOWN_PARTNER_6',
          },
        ],
        tracking_status: [
          {
            key: 'ALL',
            value: null,
          },
          {
            key: 'SUCCESS',
            value: 'SUCCESS',
          },
          {
            key: 'PENDING',
            value: 'PENDING',
          },
        ],
      });
    },

    async getChart(): Promise<ResponseData<any>> {
      const totalArrivalData = [
        [1262304000000, 16],
        [1262563200000, 150],
        [1262649600000, 150],
        [1262736000000, 250],
        [1262822400000, 520],
        [1262908800000, 550],
        [1263168000000, 50],
        [1263254400000, 50],
        [1263340800000, 650],
        [1263427200000, 650],
        [1263513600000, 150],
        [1263772800000, 250],
      ];
      const totalSubmitData = [
        [1262304000000, 550],
        [1262563200000, 950],
        [1262649600000, 650],
        [1262736000000, 250],
        [1262822400000, 350],
        [1262908800000, 507],
        [1263168000000, 506],
        [1263254400000, 505],
        [1263340800000, 502],
        [1263427200000, 501],
        [1263513600000, 506],
        [1263772800000, 50],
      ];

      const revenueData = [
        [1262304000000, 91000000],
        [1262563200000, 81000000],
        [1262649600000, 71000000],
        [1262736000000, 16000000],
        [1262822400000, 51000000],
        [1262908800000, 10070000],
        [1263168000000, 10500000],
        [1263254400000, 10000000],
        [1263340800000, 21000000],
        [1263427200000, 81000000],
        [1263513600000, 61000000],
        [1263772800000, 81000000],
      ];

      return mockApi({
        api_overview_list: [
          {
            key: 'total_arrival',
            name: 'Total arrival',
            color: '#429EFF',
            type: 'column',
            yAxis: 0,
            data: totalArrivalData,
            // total: getTotalRequest(randomTotalData),
          },
          {
            key: 'total_submit',
            name: 'Total submit',
            color: '#00C853',
            type: 'column',
            yAxis: 0,
            data: totalSubmitData,
            // total: getTotalRequest(totalArrivalData),
          },
          {
            key: 'revenue',
            name: 'Revenue',
            color: '#F64B4B',
            type: 'line',
            yAxis: 1,
            data: revenueData,
            // total: getTotalRequest(randomFailData),
          },
        ],
        // chart_type: 1,
        // start_date: '2023-03-03',
        // end_date: '2023-03-10',
      });
    },

    async getTable(): Promise<ResponseData<any>> {
      return mockApi([
        {
          id: 0,
          uuid: '1237123729187398',
          partner_id: 0,
          tracking_source: 'Hyperlead',
          tracking_status: 'SUCCESS',
          tracking_click_id: '123',
          conversion_time: 1676347525000,
        },

        {
          id: 0,
          uuid: '1237123729187398',
          partner_id: 0,
          tracking_source: 'Hyperlead',
          tracking_status: 'SUCCESS',
          tracking_click_id: '123',
          conversion_time: 1676347525000,
        },

        {
          id: 0,
          uuid: '1237123729187398',
          partner_id: 0,
          tracking_source: 'Hyperlead',
          tracking_status: 'SUCCESS',
          tracking_click_id: '123',
          conversion_time: 1676347525000,
        },
        {
          id: 0,
          uuid: '1237123729187398',
          partner_id: 0,
          tracking_source: 'Hyperlead',
          tracking_status: 'SUCCESS',
          tracking_click_id: '123',
          conversion_time: 1676347525000,
        },
        {
          id: 0,
          uuid: '1237123729187398',
          partner_id: 0,
          tracking_source: 'Hyperlead',
          tracking_status: 'SUCCESS',
          tracking_click_id: '123',
          conversion_time: 1676347525000,
        },
        {
          id: 0,
          uuid: '1237123729187398',
          partner_id: 0,
          tracking_source: 'Hyperlead',
          tracking_status: 'SUCCESS',
          tracking_click_id: '123',
          conversion_time: 1676347525000,
        },
        {
          id: 0,
          uuid: '1237123729187398',
          partner_id: 0,
          tracking_source: 'Hyperlead',
          tracking_status: 'SUCCESS',
          tracking_click_id: '123',
          conversion_time: 1676347525000,
        },
        {
          id: 0,
          uuid: '1237123729187398',
          partner_id: 0,
          tracking_source: 'Hyperlead',
          tracking_status: 'SUCCESS',
          tracking_click_id: '123',
          conversion_time: 1676347525000,
        },
      ]);
    },
  };
}
