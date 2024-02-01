import { ReloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './NotFound.less';

function NotFound() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="not-found-container">
      <img
        src="https://stc-fin.zdn.vn/ekyc/resources/vietcapital/images/404.png"
        className="not-found-img"
      />
      <div className="fs-16-text not-found-content">
        Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút nữa.
      </div>
      <Button
        type="primary"
        className="not-found-btn"
        ghost
        icon={<ReloadOutlined />}
        onClick={handleReload}
      >
        Tải lại
      </Button>
    </div>
  );
}

export default NotFound;
