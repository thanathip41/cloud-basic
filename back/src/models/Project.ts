import { Model } from 'tspace-sqlorm'
class Project extends Model {
  constructor(){
    super()
    this.useTimestamp()
  }
}
export default Project
