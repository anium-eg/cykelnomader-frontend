import { Component } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  imageUrl:string|undefined;
  selectedFile:Blob = new Blob();

  openFileSelector:Function = (inputElement:HTMLInputElement):void => {
    inputElement.click();
  }

  onFileSelected:Function = (event:Event):void => {
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0){
      const file = input.files[0]
      this.selectedFile = input.files[0];  // save file for later use
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) =>{
        this.imageUrl = event.target?.result?.toString()
      }
      console.log(this.imageUrl);
    }
  }

  onFileRemove:Function = ():void => {
    this.imageUrl = undefined;
  }

  uploadContent(): void {
    if (!this.selectedFile) {
      console.error("No file selected");
      return;
    }
  
    const formData = new FormData();
    formData.append("image", this.selectedFile);
  
    fetch("http://localhost:8000", {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(data => console.log("Upload success:", data))
      .catch(error => console.error("Upload error:", error));
  }
  
}
