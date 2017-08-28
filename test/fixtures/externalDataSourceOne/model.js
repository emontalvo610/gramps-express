import GraphQLModel from '../../../src/helpers/GraphQLModel';

export default class ExternalOneModel extends GraphQLModel {
  // eslint-disable-next-line class-methods-use-this
  getDataById(id) {
    return Promise.resolve({
      id,
      name: 'External One Data Source',
    });
  }
}
