import { AbilityBuilder } from '@casl/ability'
import PermissionEnums from '../enums/PermissionEnums'
import * as json from './permissions.json';

/**
 * Defines how to detect object's type: https://stalniy.github.io/casl/abilities/2017/07/20/define-abilities.html
 */
function subjectName(item) {
  if (!item || typeof item === 'string') {
    return item
  }

  return item.__type
}

export default AbilityBuilder.define({ subjectName }, can => {
  json.map(item => {
    let permissions= [];
    item.permissionAreas.map(permission => {
      permissions.push(permission.name);
    })
    can(permissions, item.name);
  });
  // can([PermissionEnums.TODO_CREATE], 'Todo')
  // can([PermissionEnums.TODO_VIEW], 'Todo')
  // can([PermissionEnums.TODO_UPDATE, PermissionEnums.TODO_DELETE], 'Todo', { assignee: 'me' })
})
