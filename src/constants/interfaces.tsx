export interface TouchableProps {
  dark?: boolean;
  onPress?: () => void;
  disabled?: boolean;
}

export interface NavigationProps {
  goBack?: () => void;
  openDrawer?: () => void;
  closeDrawer?: () => void;
  navigate?: any;
  replace?: any;
  reset?: any;
  params?: any;
  name?: string;
}

export interface ScreenProps {
  navigation?: NavigationProps;
  route?: NavigationProps;
}

export interface IModals {
  visible: boolean;
  onPress?: (arg?: any) => void;
}
export interface IFirebasePayload {
  currency?: string,
  amount?: number | string,
  invoice_id?: number | string,
  payment_id?: number | string,
  transaction_id?: number | string,
  method?: string,
  origin?: string,
  refunftype?:string,
  value:string

}
