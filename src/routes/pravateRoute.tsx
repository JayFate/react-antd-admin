import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Result, Button } from 'antd';
import { useLocale } from '@/locales';
import { RouteProps, useLocation } from 'react-router';
import { useSelector } from 'react-redux';

const PrivateRoute: FC<RouteProps> = props => {
  // hook 获取store 中 state 方式
  const { logged } = useSelector(state => state.user);
  const navigate = useNavigate();
  const { formatMessage } = useLocale();
  // useLocation
  // This hook returns the current location object. This can be useful if you'd like to perform some side effect whenever the current location changes.
  /**
    interface Location {
      pathname: string;
      search: string;
      hash: string;
      state: unknown;
      key: string;
    }
   */
  const location = useLocation();

  // 403 没有页面的访问权限
  return logged ? (
    (props.element as React.ReactElement)
  ) : (
    <Result
      status="403"
      title="403"
      subTitle={formatMessage({ id: 'gloabal.tips.unauthorized' })}
      extra={
        <Button
          type="primary"
          onClick={() => navigate(`/login${'?from=' + encodeURIComponent(location.pathname)}`, { replace: true })}
        >
          {formatMessage({ id: 'gloabal.tips.goToLogin' })}
        </Button>
      }
    />
  );
};

export default PrivateRoute;
