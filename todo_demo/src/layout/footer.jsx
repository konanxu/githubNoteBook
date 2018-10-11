import '../assets/styles/footer.styl'
export default {
  data() {
    return {
      author: 'Konan'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>write by {this.author} </span>
      </div>
    )
  }
}