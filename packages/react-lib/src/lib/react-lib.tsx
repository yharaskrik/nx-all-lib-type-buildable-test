import './react-lib.module.scss';
import { nodeLib } from '@all-libs/node-lib';

/* eslint-disable-next-line */
export interface ReactLibProps {}

export function ReactLib(props: ReactLibProps) {
  nodeLib();
  return (
    <div>
      <h1>Welcome to ReactLib!</h1>
    </div>
  );
}

export default ReactLib;
