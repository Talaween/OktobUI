import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Row, Col } from 'antd'; 
import Hello from './components/Hello';

function App() {
  let Meta = Card.Meta;

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row type="flex" justify="center">
        <Col span={4}>
          <Hello name="Mahmoud" />
        </Col>
      </Row>
      
      <Row type="flex" justify="center">
        <Col span={6}> 
          <Card
              hoverable
              style={{ width: 320 }}
              cover={<img alt="example" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />}
            >
              <Meta title="This is the title of article 3" description="article 3 talks about some topic and this is it..." />
          </Card>
        </Col>
        <Col span={6}> 
        <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1498993337246-d6dc6b424efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" />}
          >
            <Meta title="This is the title of article 3" description="article 3 talks about some topic and this is it..." />
        </Card>
        </Col>
        <Col span={6}> 
          <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1548092304-e0205cb0031b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />}
          >
            <Meta title="This is the title of article 3" description="article 3 talks about some topic and this is it..." />
          </Card>
        </Col>
      </Row>
      <br/>
      <Row type="flex" justify="center">
        <Col span={6}> 
          <Card
              hoverable
              style={{ width: 320 }}
              cover={<img alt="example" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />}
            >
              <Meta title="This is the title of article 3" description="article 3 talks about some topic and this is it..." />
          </Card>
        </Col>
        <Col span={6}> 
        <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1498993337246-d6dc6b424efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" />}
          >
            <Meta title="This is the title of article 3" description="article 3 talks about some topic and this is it..." />
          </Card>
        </Col>
        <Col span={6}> 
          <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1548092304-e0205cb0031b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />}
          >
            <Meta title="This is the title of article 3" description="article 3 talks about some topic and this is it..." />
          </Card>
        </Col>
      </Row>
      <br/>
      <Row type="flex" justify="center">
        <Col span={6}> 
          <Card
              hoverable
              style={{ width: 320 }}
              cover={<img alt="example" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />}
            >
              <Meta title="This is the title of article 3" description="article 3 talks about some topic and this is it..." />
          </Card>
        </Col>
        <Col span={6}> 
        <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1498993337246-d6dc6b424efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" />}
          >
            <Meta title="This is the title of article 3" description="article 3 talks about some topic and this is it..." />
          </Card>
        </Col>
        <Col span={6}> 
          <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1548092304-e0205cb0031b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />}
          >
            <Meta title="This is the title of article 3" description="article 3 talks about some topic and this is it..." />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
