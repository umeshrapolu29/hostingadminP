import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Http,Response,Headers} from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  //  template:`<h1>data</h1>
  //           <div *ngIf="found">
  //         <li>{{email}}</li>

  //         </div>
  //  `,
  styleUrls: ['./viewdetails.component.scss']
})
export class ViewdetailsComponent  {
  imageproduct:any;
  empData = { 
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    DOJ:'',
    phonenumber:'',
    gender:'',
    DOB:'', 
    fullid:'',
    cnf_pswd:'',
    
    //confirmpassword: '',
    token: localStorage.getItem('token'),
    id:localStorage.getItem('id')
  
  }

  d:any
  employees={token: localStorage.getItem('token')};
  email:String='';
  found:boolean=false;
  image:String='';
  name:string;
  DOJ:string;
  DOB:string;
  phone:string;
  photo:string;
  gender:string;
  id:number;
  myArray:any;
  getdetails={};
 


  datas:any=[
{
    "email": "sampath@gmail.com",
    "password": "$2b$10$QvVZi.MWBP93gqdyGre9y.GocVyvL/JcPQOqFCNI522bIs9Gp1Sv.",
    "created": "2019-08-07 11:53:32.678",
    "id": 1,
    "fullid": "ZYX_2019_08_1",
    "reason": "Reason",
    "reqtype": "sick",
    "requestto": null,
    "status": "Approved",
    "name": "sampath kumar",
    "photo": "http://localhost:3000/images/bga.jpg",
    "DOJ": "2019-08-14",
    "DOB": "2019-08-06",
    "gender": "male",
    "phone": "9966218131",
    "fromdays": "2019-08-14",
    "todays": "2019-08-16"

}
  ]

  public emoployeeData: FormGroup
  public filesToUpload: Array<File> = [];
  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient,private http: Http) { }
    fileChangeEvent(fileInput: any) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
      // this.fileName = this.filesToUpload[0].name;
    }
   
  ngOnInit() {
    
    
    this._httpclient.get('http://localhost:3000/Payslips/getEmployeeNames')
    .subscribe(
      (res)=>
      {
        console.log('===>', res)
        this.myArray=res;
        this.name = this.myArray[0].name;

        console.log('res==>', this.name)
        this.name=res[1].name
        // this.name2=res[2].name
        // this.name2=res[3].name
        console.log( this.name)

      }
    )

   
      }
      viewemployee()
  {
   console.log('inside of function')
    //console.log(this.viewemployee1)
    const viewemployee  = new FormData();
    ///const file: File = this.filesToUpload[0];
  
    viewemployee.append('fullid',this.empData.fullid);
    localStorage.setItem('fulli',this.empData.fullid)
   
    this._auth.viewemployee(viewemployee)
    .subscribe(
      (res)=>{
      

        

        console.log("sampath")
        console.log(res);

        
      

        this.email=res[0].email
        console.log(this.email)
         this.name=res[0].name
         this.id=res[0].fullid
         this.DOJ=res[0].DOJ
         this.DOB=res[0].DOB
         this.phone=res[0].phone
         this.gender=res[0].gender
         this.photo=res[0].photo
         console.log(res[0].photo)
      }

    )
  }
  addemployee() {
    
    console.log("addemployee")
    console.log(this.empData.DOJ +"id is")
    const payload = new FormData();
    const file: File = this.filesToUpload[0];
    payload.append('imageproduct', this.filesToUpload[0], this.filesToUpload[0].name);
    console.log(File+" file")
    payload.append('first_name',this.empData.first_name);
    payload.append('last_name',this.empData.last_name);
    payload.append('email',this.empData.email);
    payload.append('password', this.empData.password);
    payload.append('DOJ',this.empData.DOJ);
    payload.append('phonenumber',this.empData.phonenumber),
    payload.append('gender',this.empData.gender),
    payload.append('DOB',this.empData.DOB),
    payload.append('token',this.empData.token)
    payload.append('id',this.empData.id)
 
   
    this._auth.uploadSheet(payload)
      .subscribe(
        res => {
          console.log(res)
          console.log(this.empData )
          console.log(this.empData.id )
          if (localStorage.getItem('token') == "undefined") {
            this._router.navigate(['/signin'])
          }
          else {
            this._router.navigate(['/homepage'])
          }
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['/viewnotice'])
            }
          }
        }
      )
  }

  priview(){   
    $(".imgAdd").click(function(){
      $(this).closest(".row").find('.imgAdd').before('<div class="col-sm-2 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>');
  });
  $(document).on("click", "i.del" , function() {
    $(this).parent().remove();
});
  $(function() {
    $(document).on("change",".uploadFile", function()
    {
        var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        // if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
        
        if (/^image/.test( files[0].type)){ // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file
            
            reader.onloadend = function(){ // set image data as background of div
                //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
                uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
            }
        }
        
    });
});    
  }  
  alert(){
    alert("Added auccessfully");
  }   
}
/*   console.log(data);
        console.log(data[0].email);
        

          if(data.length){

       
               this.email=data[0].email;
               this.found=true;

             console.log(this.email+"email is");*/