import React, { Component } from "react";
import { API_URL } from "../axios";
import uploadImage from "../upload.png";

function UploadButton(props) {
  if (props.multiple) {
    return <span>Upload Files</span>;
  } else {
    return <span>Upload File</span>;
  }
}

class Dropzone extends Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.state = {
      highlight: false
    };
  }

  createInput() {
    if (this.props.multiple) {
      return (
        <input
          ref={this.fileInputRef}
          style={styles.input}
          type="file"
          onChange={this.onFilesAdded}
          multiple
        />
      );
    } else {
      return (
        <input
          ref={this.fileInputRef}
          style={styles.input}
          type="file"
          onChange={this.onFilesAdded}
        />
      );
    }
  }

  openFileDialog = () => {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  };

  onFilesAdded = e => {
    if (this.props.disabled) return;
    const files = e.target.files;
    if (this.props.accept) {
      let type = this.props.accept;
      if (type === "*") {
        type = ".";
      }
      for (let i = 0; i < files.length; i++) {
        if (!files[i].type.match(type)) {
          alert(`${files[i].name} type is invalid.`);
          return;
        }
      }
    }
    if (this.props.maxSize) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > parseFloat(this.props.maxSize) * 1024 * 1024) {
          alert(`${files[i].name} is too large.`);
          return;
        }
      }
    }
    if (this.props.onFilesAdded) {
      const filesArray = this.filesToArray(files);
      this.props.onFilesAdded(filesArray);
    }
  };

  onDragOver = e => {
    e.preventDefault();
    if (this.props.disabled) return;
    this.setState({ highlight: true });
  };

  onDragLeave = () => {
    this.setState({ highlight: false });
  };

  onDrop = e => {
    e.preventDefault();

    if (this.props.disabled) return;
    const files = e.dataTransfer.files;
    if (this.props.accept) {
      let type = this.props.accept;
      if (type === "*") {
        type = ".";
      }
      for (let i = 0; i < files.length; i++) {
        if (!files[i].type.match(type)) {
          alert(`${files[i].name} type is invalid.`);
          return;
        }
      }
    }
    if (this.props.maxSize) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > parseFloat(this.props.maxSize) * 1024 * 1024) {
          alert(`${files[i].name} is too large.`);
          return;
        }
      }
    }
    if (this.props.onFilesAdded) {
      const filesArray = this.filesToArray(files);
      this.props.onFilesAdded(filesArray);
    }
  };

  filesToArray(files) {
    const array = [];
    for (var i = 0; i < files.length; i++) {
      array.push(files.item(i));
    }
    return array;
  }

  render() {
    let style = !this.state.highlight
      ? {
          ...styles.dropzone,
          cursor: this.props.disabled ? "default" : "pointer"
        }
      : {
          ...styles.dropzone,
          ...styles.highlight,
          cursor: this.props.disabled ? "default" : "pointer"
        };
    return (
      <div
        className={`${this.state.highlight ? "highlight" : ""}`}
        style={style}
        onClick={this.openFileDialog}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
      >
        {(!this.props.fileCount || this.props.fileCount < 1) && (
          <img alt="Upload" style={styles.icon} src={uploadImage} />
        )}
        {this.createInput()}
        {/* <UploadButton multiple={this.props.multiple} /> */}
      </div>
    );
  }
}

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const percentage = this.props.progress ? this.props.progress.percentage : 0;
    const isError = this.props.progress
      ? this.props.progress.state === "error"
      : false;

    const style = !isError
      ? { ...styles.progress, width: percentage + "%" }
      : { ...styles.progress, width: percentage + "%", backgroundColor: "red" };

    return (
      <div style={styles.progressBar}>
        <div style={style} />
      </div>
    );
  }
}

class FileUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      uploadSuccess: false
    };

    this.maxFiles = this.props.maxFiles ? this.props.maxFiles : 1;
  }

  renderProgress = file => {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (
      this.state.uploading ||
      this.state.uploadSuccess ||
      this.state.uploadProgress
    ) {
      return (
        <div style={styles.progressWrapper}>
          <Progress progress={uploadProgress} />
          {uploadProgress && uploadProgress.state === "done" && (
            <span
              className="fa fa-check"
              title="Done"
              style={{ ...styles.fontIcon, color: "green" }}
            ></span>
          )}
          {uploadProgress && uploadProgress.state === "error" && (
            <span
              className="fa fa-close"
              title="Done"
              style={{ ...styles.fontIcon, color: "red" }}
            ></span>
          )}
        </div>
      );
    }
  };

  onFilesAdded = files => {
    if (this.state.files.length + 1 > this.maxFiles) {
      alert(`Maximum number of files (${this.maxFiles}) exceeded.`);
    } else if (files.length > this.maxFiles) {
      alert(
        `You can only add ${this.maxFiles -
          this.state.files.length} files more.`
      );
    } else {
      this.setState(prevState => ({
        files: prevState.files.concat(files)
      }));
    }
  };

  removeFile = index => {
    const files = this.state.files;
    files.splice(index, 1);
    this.setState(prevState => ({
      files
    }));
  };

  uploadFiles = async () => {
    this.setState({ uploadProgress: {}, uploading: true });
    const promises = [];
    this.state.files.forEach(file => {
      promises.push(this.sendRequest(file));
    });
    try {
      await Promise.all(promises);
      this.setState({
        uploadSuccess: true,
        uploading: false
        //uploadProgress: {}
      });
    } catch (e) {
      console.warn(e);
      alert(`Not all files could be uploaded`);

      this.setState({
        uploadSuccess: true,
        uploading: false
        //uploadProgress: {}
      });
    }
  };

  sendRequest = file => {
    return new Promise((resolve, reject) => {
      /* const formData = new FormData();
      formData.append("file", file, file.name);

      axios
        .post("", formData)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        }); */

      const req = new XMLHttpRequest();

      req.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          const copy = { ...this.state.uploadProgress };
          copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100
          };
          this.setState({ uploadProgress: copy });
        }
      });

      req.upload.addEventListener("load", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "done", percentage: 100 };
        this.setState({ uploadProgress: copy });
        resolve(req.response);
      });

      req.upload.addEventListener("error", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "error", percentage: 0 };
        this.setState({ uploadProgress: copy });
        reject(req.response);
      });

      req.addEventListener("readystatechange", res => {
        if (req.readyState === 4) {
          
          
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = {
          state: req.status === 200 ? "done" : "error",
          percentage: 100
        };
        this.setState({ uploadProgress: copy });

          if (req.status === 200) {
            if (this.props.onSuccess) {
              try {
                this.props.onSuccess(
                  JSON.parse(res.currentTarget.responseText)
                );
              } catch (e) {
                if (this.props.onError) {
                  this.props.onError(res.currentTarget.responseText);
                }
              }
            }
          } else {
            if (this.props.onError) {
              this.props.onError(res.currentTarget.responseText);
            }
          }
        }
      });

      const formData = new FormData();
      formData.append("file", file, file.name);

      req.open("POST", `${API_URL}/upload`);
      req.send(formData);
    });
  };

  renderActions = () => {
    if (this.state.uploadSuccess) {
      return (
        <button
          onClick={e => {
            e.preventDefault();

            this.setState({
              files: [],
              uploadSuccess: false,
              uploadProgress: {}
            });
          }}
          style={styles.buttonDisabled}
        >
          Clear
        </button>
      );
    } else {
      return (
        <a
          disabled={
            this.state.files.length < 0 ||
            this.state.files.length > this.maxFiles ||
            this.state.uploading
          }
          onClick={this.uploadFiles}
          style={styles.button}
        >
          Upload
        </a>
      );
    }
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.uploader}>
          <div style={styles.uploadBox}>
            <Dropzone
              onFilesAdded={this.onFilesAdded}
              disabled={this.state.uploading || this.state.uploadSuccess}
              accept={this.props.accept || null}
              maxSize={this.props.maxSize || 8}
              fileCount={this.state.files.length}
            />
            {this.state.files.length > 0 && (
              <div style={styles.files}>
                {this.state.files.map((file, index) => {
                  return (
                    <div key={file.name} style={styles.row}>
                      <span
                        style={styles.removeBtn}
                        className="fa fa-close"
                        onClick={() => this.removeFile(index)}
                      ></span>
                      <span style={styles.filename}>{file.name}</span>
                      {this.renderProgress(file)}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div style={styles.uploadActions}>{this.renderActions()}</div>
        </div>
      </div>
    );
  }
}

const styles = {
  dropzone: {
    width: "100%",
    borderRight: "1px solid #e3e3e3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "16px",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  icon: {
    width: "32px",
    height: "32px",
    opacity: 0.3,
    marginTop: "2px"
  },
  input: {
    display: "none"
  },
  highlight: {
    backgroundColor: "#44bcf8ec"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-start",
    textAlign: "left",
    overflow: "hidden"
  },
  files: {
    alignItems: "flex-start",
    justifyItems: "flex-start",
    flex: 1,
    overflowY: "auto"
  },
  row: {
    position: "relative",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "8px 16px",
    overflow: "hidden",
    boxSizing: "border-box",
    paddingLeft: "3em"
  },
  uploader: {
    display: "flex",
    flexDirection: "row",
    boxSizing: "border-box",
    border: "1px solid #e3e3e3",
    marginBottom: "10px",
    borderRadius: "4px",
    width: "100%",
    position: "relative"
  },
  filename: {
    fontSize: "16px",
    color: "#555"
  },
  progressBar: {
    width: "100%",
    height: "8px",
    backgroundColor: "#e9ecef",
    borderRadius: "5px"
  },
  progress: {
    backgroundColor: "#34bfa3",
    height: "100%",
    margin: 0,
    borderRadius: "5px"
  },
  progressWrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    padding: "6px 16px",
    border: 0,
    backgroundColor: "#34bfa3",
    color: "#fff",
    outline: 0,
    minWidth: "88px",
    touchAction: "manipulation",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "4px",
    display: "inline-block",
    height: "36px"
  },
  buttonDisabled: {
    padding: "6px 16px",
    border: 0,
    backgroundColor: "#34bfa3",
    color: "#fff",
    outline: 0,
    minWidth: "88px",
    touchAction: "manipulation",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    textAlign: "center",
    cursor: "default",
    borderRadius: "4px",
    display: "inline-block",
    height: "36px"
  },
  uploadBox: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    position: "relative"
  },
  uploadActions: {
    padding: ".5em"
  },
  removeBtn: {
    marginRight: ".5em",
    padding: "0 5px",
    position: "absolute",
    top: ".975em",
    left: ".75em"
  },
  fontIcon: {
    marginLeft: "24px",
    opacity: 0.5,
    color: "#888"
  }
};

export default FileUploader;
