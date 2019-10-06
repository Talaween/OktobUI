import React from 'react';
import { Card, Icon } from 'antd'; 

class Hello extends React.Component {

  constructor(props){
    super(props);
    this.state = {
     
    }
    
  }

 
  render() {
    return <Card
    hoverable
    style={{ width: 320 }}
    cover={<img alt="example" src="https://images.unsplash.com/photo-1498993337246-d6dc6b424efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" />}
  >
    <Meta title="This is the title of article 3" description="article 3 talks about some topic and this is it..." />

    <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
</Card>;
  }
}

export default Hello;