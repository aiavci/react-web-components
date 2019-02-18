import React, { Component } from 'react';

type MyProps = {
	orgName?: string,
	alignment?: string,
	isFooter?: boolean,
	small?: string,
	logoUrl: string
};
type MyState = { value: string };
class Logo extends Component<MyProps, MyState> {
  render() {
		const orgName = this.props.orgName || "";
		const alignment = this.props.alignment || "center";
		const copyRightDisplay = (this.props.isFooter) ? "block" : "none";
		const maxWidth = (this.props.small) ? "4em" : "8em";

	  return (
			<a href="/" style = {{display: "flex", alignSelf: alignment, flexDirection: "column", textDecoration: "none", color: "inherit"}}>
		  	<img style={{
		  		maxWidth: maxWidth,
		  		alignSelf: alignment
		  	}} src = {this.props.logoUrl} />

		  	<p style={{margin: "0", display: copyRightDisplay}}>
		  		© 2019 {orgName}
		  	</p>
		  </a>
	  )
	}
}

export default Logo
