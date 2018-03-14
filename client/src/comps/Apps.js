import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getApps } from '../actions/apps';
import {
  Container,
  Grid,
  Header,
  Card,
  Image,
  Dropdown,
  Button,
  Divider,
} from 'semantic-ui-react';
import image from './background.jpg';

class Apps extends React.Component {
  state = { category: ' ' };
  componentDidMount() {
    this.props.dispatch(getApps());
  }

  apps = () => {
    const { apps } = this.props;
    const { category } = this.state;
    let visible = apps;
    if (category)
      visible = apps.filter(a => a.category === category);
    return visible.map(app => (
      <Card key={app.id}>
        <Image src={app.logo} />
        <Card.Content>
          <Card.Header>{app.name}</Card.Header>
          <Card.Meta>
            <span>{app.author}</span>
          </Card.Meta>
          <Card.Description>
            {app.category}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/apps/${app.id}`}>View App</Link>
        </Card.Content>
      </Card>
    ));
  };

  clearCategory = () => {
    this.setState({ category: '' });
  };

  handleChange = (e, { value }) => {
    this.setState({ category: value });
  };

  categoryOptions = () => {
    const { categories } = this.props;
    return categories.map((c, i) => {
      return { key: i, text: c, value: c };
    });
  };

  render() {
    var styles = {
      width: '100%',
      height: 'auto',
      backgroundImage: 'url(' + image + ')',
    };
    const { category } = this.state;
    return (
      <section style={styles}>
        <Container>
          <Header as="h3" textAlign="center">
            Apps
          </Header>
          <Dropdown
            placeholder="Filter By Category"
            fluidselection
            options={this.categoryOptions()}
            value={category}
            onChange={this.handleChange}
          />
          {category && (
            <Button
              fluid
              basic
              onClick={() =>
                this.setState({ category: '' })
              }>
              Clear Filter: {category}
            </Button>
          )}
          <Divider />
          <Card.Group itemsPerRow={4}>
            {this.apps()}
          </Card.Group>
        </Container>
      </section>
    );
  }
}
const mapStateToProps = state => {
  const { apps } = state;
  const categories = [
    ...new Set(apps.map(a => a.category)),
  ];
  return { apps, categories };
};
export default connect(mapStateToProps)(Apps);
