import { NativeModules } from 'react-native';

const { NELIOIDFA } = NativeModules;

class IDFA {
  getIDFA() {
    return NELIOIDFA.getIDFA();
  }
}

IDFAInstance = new IDFA();
export default IDFAInstance;
