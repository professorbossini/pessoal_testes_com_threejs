import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as THREE from 'three';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  @ViewChild ('domObj') canvasEl: ElementRef;

  private _ELEMENT: any;
  private _SCENE;
  private _CAMERA;
  public renderer;
  private _GEOMETRY;
  public _MATERIAL;
  public _CUBE;
  public _SPRITE;

  ionViewDidLoad (): void{
    this.initialiseWebGLObjectAndEnvironment();
    this.renderAnimation();
  }

  initialiseWebGLObjectAndEnvironment (): void{
    this._ELEMENT = this.canvasEl.nativeElement;
    this._SCENE = new THREE.Scene();
    this._CAMERA = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize (window.innerWidth, window.innerHeight);
    this._ELEMENT.appendChild(this.renderer.domElement);
    /*this._GEOMETRY = new THREE.BoxGeometry(3, 3, 3);
    this._MATERIAL = new THREE.MeshBasicMaterial({
      color: 0x0000FF,
      wireframe: true

    });
    this._CUBE = new THREE.Mesh (this._GEOMETRY, this._MATERIAL);
    let spriteMap = new THREE.TextureLoader().load("../assets/imgs/pao_cru.jpeg");
    let spriteMaterial = new THREE.SpriteMaterial({
      map: spriteMap,
      sizeAttenuation: false
    });
    this._SPRITE= new THREE.Sprite(spriteMaterial);
    this._SCENE.add (this._SPRITE)
    //this._SCENE.add(this._CUBE);
    this._CAMERA.position.z = 20;*/
    this._CAMERA.position.z = 5;
    let textureLoader = new THREE.TextureLoader();
    let texture1  = textureLoader.load("../assets/imgs/pao_cru.jpeg")
    let materials = [
      new THREE.MeshBasicMaterial (null),
      new THREE.MeshBasicMaterial (null),
      new THREE.MeshBasicMaterial ({map: texture1}),
      new THREE.MeshBasicMaterial ({map: texture1}),
      new THREE.MeshBasicMaterial ({map: texture1}),
      
    ]
    //let faceMaterial = new THREE.MultiMaterial (materials);
    let geometry = new THREE.BoxGeometry(3, 3, 3);
    this._CUBE  = new THREE.Mesh (geometry, materials);
    this._SCENE.add(this._CUBE);
  }



  private _animate (): void {
    requestAnimationFrame (() => {
      this._animate()
    })
    //this._CUBE.rotation.x += 0.015;
    //this._CUBE.rotation.y += 0.015;
    this.renderer.render(this._SCENE, this._CAMERA);
  }
  renderAnimation(): void{
    this._animate();
  }

  x (): void {
    this._CUBE.rotation.x -= 0.3;
    //this._CAMERA.position.x -= 0.2
  }

  y (): void {
    this._CUBE.rotation.y -= 0.3;
    //this._CAMERA.position.y -= 0.2
  }
  z (): void {
    this._CUBE.rotation.z -= 0.3;
    //this._CAMERA.position.y += 15

    //this._CAMERA.position.z -= 0.2
    /*this._CAMERA.position.z -= 0.5;
    if (this._CAMERA.position.z == 2){
      this._CAMERA.position.z = 5;
    }*/
    //alert ("executou zoom")
    
    
  }

  zoom (): void{
    this._CAMERA.position.z -= 0.5
    if (this._CAMERA.position.z == 2){
      this._CAMERA.position.z = 5;
    }

  }

  rotacionar (): void {
   
   
      //this._CUBE.rotation.y -=100
      //this._CUBE.rotation.x -=100
      //this._CUBE.rotation.y +=100
      this._CUBE.rotation.y +=100
  
    
  }
}
