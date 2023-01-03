import { FC, ReactElement } from 'react';
import { RouteProps } from 'react-router';
import PrivateRoute from './pravateRoute';
import { useIntl } from 'react-intl';

export type WrapperRouteProps = RouteProps & {
  /** document title locale id */
  titleId: string;
  /** authorization？ */
  auth?: boolean;
};

/**
 * 用于辅助权限判断的高阶组件
 */
const WrapperRouteComponent: FC<WrapperRouteProps> = ({ titleId, auth, ...props }) => {
  const { formatMessage } = useIntl();

  if (titleId) {
    document.title = formatMessage({
      id: titleId,
    });
  }

  return auth ? <PrivateRoute {...props} /> : (props.element as ReactElement);
};

export default WrapperRouteComponent;
