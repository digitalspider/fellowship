import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import 'jest-enzyme';

configure({ adapter: new Adapter() });
