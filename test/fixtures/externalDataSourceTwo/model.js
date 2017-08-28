import GraphQLModel from '../../../src/helpers/GraphQLModel';

export default class ExternalTwoModel extends GraphQLModel {
  // eslint-disable-next-line class-methods-use-this
  getDataById(id) {
    return Promise.resolve({
      id,
      name: 'External Two Data Source',
    });
  }
}
