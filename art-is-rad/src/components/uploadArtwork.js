<input type="file" onChange={this.fileChangedHandler}>
<button onClick={this.uploadHandler}>Upload!</button>

// fileChangedHandler = (event) => {
//  const file = event.target.files[0]
// } 

// uploadHandler = () => { ... }

// state = {selectedFile: null} 
// fileChangedHandler = (event) => {
//     this.setState({selectedFile: event.target.files[0]})
// }

// uploadHandler = () => {
//     console.log(this.state.selectedFile)
// }


// {/* // SEND FILE TO SERVER */ }

// uploadHandler = () => {
//     axios.post('my-domain.com/file-upload' this.state.selectedFile)
// }

// uploadHandler = ()=> {
//     const formData = new FormData()
//     formData.append('myFile', this.state.selectedFile,
// axios.post('my-domain.com/file-upload' formData))
// }

// uploadHandler = () => {
//     ...
//     axios.post('my-domain.com/file/upload' , formData, {
//       onUploadProgress: progressEvent => {
//           comsole.log(progressEvent.loaded / progressEvent.total)
//       }  
//     })
// }
//       </div>
//     );

//   }
// }