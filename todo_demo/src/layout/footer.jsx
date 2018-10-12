import '../assets/styles/footer.styl'

// import className from '../assets/styles/footer.styl'
export default {
  data () {
    return {
      author: 'Konan'
    }
  },
  render () {
    return (
      // {className.footer}
      <div id="footer">
        <span>write by {this.author} </span>
      </div>
    )
  }
}
