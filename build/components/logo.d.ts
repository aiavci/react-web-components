import { Component } from 'react';
declare type MyProps = {
    orgName?: string;
    alignment?: string;
    isFooter?: boolean;
    small?: string;
    logoUrl: string;
};
declare type MyState = {
    value: string;
};
declare class Logo extends Component<MyProps, MyState> {
    render(): JSX.Element;
}
export default Logo;
//# sourceMappingURL=logo.d.ts.map