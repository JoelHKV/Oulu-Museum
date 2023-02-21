import './style.css'


import * as THREE from 'three';
const scene = new THREE.Scene();

import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';


import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';


import * as fontt from 'three/examples/fonts/gentilis_bold.typeface.json'


var raycaster = new THREE.Raycaster();
var intersects = raycaster.intersectObjects(scene.children);

const loader = new FontLoader();
let font = loader.parse(fontt)


import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const textureLoader = new THREE.TextureLoader();


var www = window.innerWidth
var hhh = window.innerHeight
var aspectratio = www / hhh
const camera = new THREE.PerspectiveCamera(75, aspectratio, 0.1, 1000);

if (www < 750) { camera.fov=95 }




const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    //antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(www, hhh);


window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {

    www = window.innerWidth
    hhh = window.innerHeight
    aspectratio = www / hhh

    camera.aspect = aspectratio;

    if (www < 750) { camera.fov = 95 }
    if (www >= 750) { camera.fov = 75 }
    camera.updateProjectionMatrix();
   
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// this function contains the creation of a miniature table that will be replaced by a glb model
// in real life applications
function miniaturetable(edgeMaterial, pathtoplane) {

    const minioulu = new THREE.Group();
    var vitrineMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3
    });
    var vitrineGeometry = new THREE.BoxGeometry(5, 5, 0.5);

    var vitrine = new THREE.Mesh(vitrineGeometry, vitrineMaterial);

    vitrine.rotation.x = Math.PI / 2;
    vitrine.position.y = -0.8;

    minioulu.add(vitrine)

    var edgeGeometry = new THREE.BoxGeometry(1, 1, 1);

    var xxx = [-5, 5, 0, 0]
    var yyy = [0, 0, -5, 5]

    for (let i = 0; i < 4; i++) {

        var edge = new THREE.Mesh(edgeGeometry, edgeMaterial);
        edge.position.set(xxx[i] / 2, -0.5, yyy[i] / 2);
        edge.scale.set(5, 0.05, 0.05);
        if (i < 2) {
            edge.rotation.y = Math.PI / 2;
        }

        minioulu.add(edge)

    }

    var sric = 0.025
    var xxx2 = [-5 + sric, 5 - sric, -5 + sric, 5 - sric]
    var yyy2 = [-5 + sric, -5 + sric, 5 - sric, 5 - sric]

    for (let i = 0; i < 4; i++) {

        var edge = new THREE.Mesh(edgeGeometry, edgeMaterial);
        edge.position.set(xxx2[i] / 2, -0.75, yyy2[i] / 2);
        edge.scale.set(0.05, 0.55, 0.05);
        edge.rotation.y = Math.PI;
        // edges.push(edge);

        minioulu.add(edge)

        var cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 4, 32), edgeMaterial);
        cylinder.position.y = -2.5
        cylinder.position.x = xxx2[i] / 2
        cylinder.position.z = yyy2[i] / 2
        minioulu.add(cylinder)

    }

    var topPlane = new THREE.Mesh(
        new THREE.BoxGeometry(5.01, 5.01, 0.1),
        new THREE.MeshBasicMaterial({
            color: 0xcccccc,
            transparent: true,
            opacity: 1
        })
    );
    topPlane.position.y = -1.01;
    topPlane.rotation.x = Math.PI / 2;

    const tableGeometry = new THREE.BoxGeometry(5, 5, 0.1);
    const ouluMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(pathtoplane) });
    const oulutable = new THREE.Mesh(tableGeometry, ouluMaterial);
    oulutable.position.y = -1;
    oulutable.rotation.x = Math.PI / 2;

    minioulu.add(oulutable, topPlane)
    minioulu.rotation.y = Math.PI

    return minioulu
}





var edgeMaterial = new THREE.LineDashedMaterial({
    color: 0xcccccc
});



const minioulu = miniaturetable(edgeMaterial, './ouluitems/ouluplane.png')
scene.add(minioulu)


const followObject = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), edgeMaterial);



var roomx = 10
var roomy = 10
var roomz = 10



const roomGeometry = new THREE.BoxGeometry(roomx, roomy, 1);
const roomGeometry2 = new THREE.BoxGeometry(roomx-7, roomy, 1);
const roomGeometry3 = new THREE.BoxGeometry(roomx, roomy - 7, 1);
const doorGeometry = new THREE.BoxGeometry(4, 7, 1);


const wallMaterials = []
// 0x988064
wallMaterials[0] = new THREE.MeshStandardMaterial({ color: 0x988064 });
wallMaterials[1] = new THREE.MeshStandardMaterial({ color: 0x000055});
wallMaterials[2] = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/brickwall.png') });
wallMaterials[3] = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/concretewall.png') });
wallMaterials[4] = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/concretewall.png') });




const doormaterial = new THREE.MeshStandardMaterial({ color: 0xaa00aa });
const textmaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });

const doors = []


function wallwithdoorhole(wallMaterial,textcontainer,i) {

 
    const wallhole = new THREE.Group();

    if (i == 2) {
        wallhole.add(arrow.clone())
    }


    if (i == 2) { wallMaterial=wallMaterials[4] }


    const walla = new THREE.Mesh(roomGeometry2, wallMaterial);
    // walla.position.z = -roomz / 2;
    walla.position.x += 3.5

    const wallb = new THREE.Mesh(roomGeometry2, wallMaterial);
    // wallb.position.z = -roomz / 2;
    wallb.position.x -= 3.5

    const wallc = new THREE.Mesh(roomGeometry3, wallMaterial);
    //  wallc.position.z = -roomz / 2;
    wallc.position.y += 3.5

    const thisdoor = new THREE.Group();




    if (i == 0) {
        const door = new THREE.Mesh(doorGeometry, doormaterial);
        door.position.y -= 1.5
        door.position.z += 0.5
        door.position.x -= 2

        thisdoor.add(door)
        const thistext = Writewrite(textcontainer[0], textmaterial, 0, 0, 0, 1, 1, 0)
        const thistext2 = Writewrite(textcontainer[1], textmaterial, 0, -0.5, 0, 1, 1, 0)
        const thistext3 = Writewrite('Aula', textmaterial, 0, -0.25, 0, 1, 1, 0)
        thistext.position.x -= 2
        thistext2.position.x -= 2
        thistext3.position.x -= 2
        thistext3.rotation.y = Math.PI
        thistext3.position.z += 1

        thisdoor.add(thistext)
        thisdoor.add(thistext2)
        thisdoor.add(thistext3)
        thisdoor.position.x += 2

        door.name = textcontainer[0]
        thistext.name = textcontainer[0]
        thistext2.name = textcontainer[0]
        doors.push(thisdoor)
    }

    wallhole.add(walla, wallb, wallc, thisdoor)

    return wallhole

}   

const title = new THREE.Group();

title.add(Writewrite('Pohjois-', textmaterial, 0, 0.25, 0, 1, 1, 0))
title.add(Writewrite('Pohjanmaan', textmaterial, 0, -0.25, 0, 1, 1, 0))
title.add(Writewrite('museo', textmaterial, 0, -0.85, 0, 1, 1, 0))
title.rotation.y=Math.PI
title.position.z -= 4.4
title.position.y +=1.5
title.scale.setScalar(1.8)
scene.add(title)

const intro = new THREE.Group();
var tempintro = Writewrite('Liiku klikkamalla', textmaterial, 0, 0.25, 0, 1, 1, 0)
tempintro.name = 'start'
intro.add(tempintro)
var tempintro = Writewrite('violettia v\u00E4ri\u00E4.', textmaterial, 0, -0.25, 0, 1, 1, 0)
tempintro.name = 'start'
intro.add(tempintro)
var tempintro = Writewrite('Klikkaa ensin t\u00E4st\u00E4.', textmaterial, 0, -0.8, 0, 1, 1, 0)
tempintro.name = 'start'
intro.add(tempintro)


var plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 2.3), doormaterial);
var plane2 = new THREE.Mesh(new THREE.PlaneGeometry(5.4, 2.6), textmaterial);
plane.name = 'start'; plane2.name = 'start'
plane.rotation.y = Math.PI; plane2.rotation.y = Math.PI
plane.position.y -= 0.4; plane2.position.y -= 0.45
plane.position.z += 0.2
plane2.position.z += 0.4
intro.add(plane,plane2)
intro.position.z -= 4.0
intro.position.y -= 2
intro.rotation.y = Math.PI
intro.scale.setScalar(1)
scene.add(intro)

var spotLights = []
for (let i = 0; i < 4; i++) {
    spotLights[i] = new THREE.SpotLight(0xffffff, 0.6);
    spotLights[i].angle = 0.65
    spotLights[i].position.x = -11
    spotLights[i].position.y = 0
    scene.add(spotLights[i]);
    spotLights[i].visible = false
}


spotLights[3].position.x = 0
spotLights[3].position.y = 3
spotLights[3].position.z = 11
spotLights[3].angle = 0.07
//spotLights[3].visible = true
//spotLights[3].target = circle



// Create a frame geometry
var frameGeometry = new THREE.BoxGeometry(5.2, 4.2, 1.1);
//var frameGeometry = new THREE.BoxGeometry(5.6, 4.5, 1.1);
var paintingGeometry = new THREE.BoxGeometry(4.8, 3.8, 1.11);
var frameMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });


//var frameMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load('frametexture.png') })





//var frame = []
var paintingMaterial = []
var paingints = []
//var paintingfiles = ['/art_pieces/tarburning.png', '/art_pieces/riverfishing.png', '/art_pieces/oldhouse.png', '/art_pieces/Franzen.png', '/oulufinland.png']
var paintingfiles = ['./ouluitems/oldhouse2.png', './ouluitems/riverfishing.png', './ouluitems/riverburning.png', './ouluitems/Franzen.png', './ouluitems/oulufinland.png']


var arrowShape = new THREE.Shape();
arrowShape.moveTo(-1, -0.5);
arrowShape.lineTo(-1, 0.5);
arrowShape.lineTo(0, 0.5);
arrowShape.lineTo(0, 1);
arrowShape.lineTo(0.2, 1);
arrowShape.lineTo(0.7, 0);
arrowShape.lineTo(0.2, -1);
arrowShape.lineTo(0, -1);
arrowShape.lineTo(0, -0.5);
arrowShape.lineTo(-1, -0.5);
var arrowGeometry = new THREE.ExtrudeGeometry(arrowShape, {
    depth: 0.8,
    bevelEnabled: false
});


var arrow = new THREE.Mesh(arrowGeometry, doormaterial);
//scene.add(arrow)
arrow.name ='Turn90'
arrow.scale.setScalar(0.8)
arrow.rotation.y = Math.PI
arrow.position.x = -3.5
arrow.position.z = -0.0


var arrow2 = arrow.clone()
arrow2.rotation.y = Math.PI
arrow2.position.z += 0
arrow2.position.x += 7

var ballgeometry = new THREE.SphereGeometry(0.5, 16, 16);
var mysphere = new THREE.Mesh(ballgeometry, doormaterial);

mysphere.name = 'Gohere'
//scene.add(mysphere)


var naviball = new THREE.Group();

var sphereposx = [4, 4, 4, 4, -4, -4, -4, -4]
var sphereposy = [4.5, 4.5, -4.5, -4.5, 4.5, 4.5, -4.5, -4.5]
var sphereposz = [4, -4, 4, -4, 4, -4, 4, -4]

for (let j = 1; j < 3; j++) {


    for (let i = 0; i < sphereposx.length; i++) {
        var temp = mysphere.clone()
        temp.position.x = sphereposx[i] / j + 11
        
        temp.position.y = sphereposy[i] / j
        if (j == 2) { temp.position.y=0.5 }
        temp.position.z = sphereposz[i] / j
        naviball.add(temp)

        
      //  scene.add(temp)
    }
    mysphere.scale.setScalar(0.2)
}
mysphere.scale.setScalar(0.1)
var aag = Math.PI/4
for (let i = 0; i < 360; i += 20) {
    var temp = mysphere.clone()
    var  x1 = 4* Math.sin(i * 2 * Math.PI / 180);
    var y1 = 1.5* Math.cos(i * 2 * Math.PI / 180);
    temp.position.y = 0.5
    temp.position.x = x1 * Math.cos(aag) - y1 * Math.sin(aag) +11
    temp.position.z = x1 * Math.sin(aag) + y1 * Math.cos(aag)
    naviball.add(temp)
}

for (let i = 0; i < 10; i += 2) {
    var temp = mysphere.clone()
    var x1 = 0.5 * i -2.5
    var y1 = 0.5
    temp.position.y = 0
    temp.position.x = x1 * Math.cos(aag) - y1 * Math.sin(aag) + 11
    temp.position.z = x1 * Math.sin(aag) + y1 * Math.cos(aag)
    naviball.add(temp)
}
for (let i = 0; i < 10; i += 2) {
    var temp = mysphere.clone()
    var x1 = 0.5 * i - 2.5
    var y1 = -0.5
    temp.position.y = 0
    temp.position.x = x1 * Math.cos(aag) - y1 * Math.sin(aag) + 11
    temp.position.z = x1 * Math.sin(aag) + y1 * Math.cos(aag)
    naviball.add(temp)
}

scene.add(naviball)
naviball.visible = false

var circleGeometry = new THREE.CircleGeometry(0.35, 15);

var circle = new THREE.Mesh(circleGeometry, doormaterial);
circle.rotation.x = Math.PI / 2


circle.rotation.y = Math.PI 
circle.position.z = 11;
circle.position.y = -0.5;
//circle.visible = false
var circle2 = circle.clone()
var circle3 = circle.clone()
scene.add(circle, circle2, circle3);

circle.visible = false; circle2.visible = false; circle3.visible = false;

circle.position.x+=1
circle.position.z -= 0.2
circle.name = 'kirkko'
circle2.position.x += 0.8
circle2.position.z -= 1.27
circle2.name = 'ainola'
circle3.position.x += 0.3
circle3.position.z += 0.06
circle3.name = 'ktalo'

spotLights[3].target = circle

const groups = [];

for (let i = 0; i < 4; i++) {

    groups[i] = new THREE.Group();


   

    const floorMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/floor-texture.png') });
    const floor = new THREE.Mesh(roomGeometry, floorMaterial);
    floor.position.y = -roomy / 2;
    floor.rotation.x = Math.PI / 2;

    if (i == 0 || i == 2) { var wall1 = wallwithdoorhole(wallMaterials[i],['Laiva','Toivo'],i) } else { var wall1 = new THREE.Mesh(roomGeometry, wallMaterials[i]);}  
    
    wall1.position.x = roomx / 2;
    wall1.rotation.y = Math.PI / 2;

    if (i == 0 || i == 1) { var wall2 = wallwithdoorhole(wallMaterials[i], ['Oulu', 'Art'], i) } else { var wall2 = new THREE.Mesh(roomGeometry, wallMaterials[i]); }
    if (i == 2) {
        wall2.add(new THREE.Mesh(frameGeometry, frameMaterial))
        var paintingMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(paintingfiles[2]) });
        wall2.add(new THREE.Mesh(paintingGeometry, paintingMaterial))
        wall2.add(arrow.clone())
        spotLights[0].target = wall2
    }
    wall2.position.x = -roomx / 2;
    wall2.rotation.y = -Math.PI / 2;

    if (i == 0 || i == 4) { var wall3 = wallwithdoorhole(wallMaterials[i], ['Mini-', 'Oulu'], i) } else { var wall3 = new THREE.Mesh(roomGeometry, wallMaterials[i]); }

   // const wall3 = new THREE.Mesh(roomGeometry, wallMaterial);
    if (i == 2) {
        wall3.add(new THREE.Mesh(frameGeometry, frameMaterial))
        var paintingMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(paintingfiles[1]) });
        wall3.add(new THREE.Mesh(paintingGeometry, paintingMaterial))
        wall3.add(arrow.clone())
        spotLights[1].target = wall3
    }
    if (i == 3) {
        var temp = new THREE.Mesh(frameGeometry, frameMaterial)
        temp.scale.y=2
        wall3.add(temp)
       // wall3.add(arrow.clone())
        var paintingMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(paintingfiles[4]) });
        var temp2 = new THREE.Mesh(paintingGeometry, paintingMaterial)
        temp2.scale.y = 2
        wall3.add(temp2)
     
    }



    wall3.position.z = roomz / 2;
    if (i == -1 || i == 3) { var wall4 = wallwithdoorhole(wallMaterials[i], ['Mini-', 'Oulu'], i) } else { var wall4 = new THREE.Mesh(roomGeometry, wallMaterials[i]); }
    wall4.position.z = - roomz / 2;
    if (i == 2) {
        wall4.add(new THREE.Mesh(frameGeometry, frameMaterial))
        var paintingMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(paintingfiles[0]) });
        wall4.add(new THREE.Mesh(paintingGeometry, paintingMaterial))      
        wall4.add(arrow2.clone())
   
        spotLights[2].target = wall4
    }
    //wall3.rotation.y = -Math.PI / 2;




    const ceilingMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/ceiling-texture2.png') });
    const ceiling = new THREE.Mesh(roomGeometry, ceilingMaterial);
    ceiling.position.y = roomy / 2;
    ceiling.rotation.x = -Math.PI / 2;


    if (i == 0) {
        groups[i].add(floor, wall1, wall2, wall3, wall4, ceiling);
    }
    else { groups[i].add(floor, wall1, wall2, wall3, wall4, ceiling); }
    scene.add(groups[i])
}


groups[1].position.x += 11
groups[2].position.x -= 11
groups[3].position.z += 11
minioulu.position.z += 11


const pointLight = new THREE.PointLight(0xffffff, 0.4);
pointLight.position.set(0, 3, 0);

const pointLight2 = new THREE.PointLight(0xffffff, 0.6);
pointLight2.position.set(11, -1, 0);




const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight, pointLight, pointLight2);

pointLight2.visible=false



var automove = 1
if (automove == 0) {
    const controls = new OrbitControls(camera, renderer.domElement);
}

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader2 = new GLTFLoader();

loader2.load('ouluitems/toivo_prop3.glb', function (model) { ouluitems(model.scene, 0) });
loader2.load('./ouluitems/PositiveSnowflake_sunset_extended.glb', function (model) { ouluitems(model.scene, 1) });
loader2.load('./ouluitems/blue2026.glb', function (model) { ouluitems(model.scene, 2) });

loader2.load('./ouluitems/tuomio_mesh_cleanup_cut.glb', function (model) { ouluitems(model.scene, 3) });
loader2.load('./ouluitems/ainola.glb', function (model) { ouluitems(model.scene, 4) });
loader2.load('./ouluitems/Kaup_only.glb', function (model) { ouluitems(model.scene, 5) });


loader2.load('./ouluitems/ouluCoat.glb', function (model) { ouluitems(model.scene, 9) });




var oulu = {}

function ouluitems(model, item) {
    oulu[item] = model
    if (item == 0) {
        oulu[item].scale.setScalar(0.32);
        oulu[item].position.y = -1.55

        oulu[item].position.z += 1
        oulu[item].position.x += 12
        oulu[item].rotation.y = Math.PI / 4;
       // spotLights[3].target = oulu[item]

    }
    if (item == 1) {
       
        oulu[item].position.x += 10.2
        oulu[item].scale.setScalar(0.85);
        oulu[item].position.y = -4.4 
        oulu[item].rotation.y = Math.PI / 4;
       // oulu[item].rotation.x = Math.PI / 2;

        oulu[item].rotation.z = Math.PI ;
        oulu[item].position.z -= 0.8




        oulu[6] = oulu[item].clone()

        oulu[6].position.z += 1.8
        oulu[6].position.x += 1.8
       // oulu[item].scale.set(0.2, 0.2, 50);
        scene.add(oulu[6]);

       // oulu[7] = oulu[item].clone()
       // oulu[7].rotation.y -= Math.PI / 2;
      //  scene.add(oulu[7]);
      
    }
    if (item == 2) {
       // oulu[item].position.z -= 4.2
      //  oulu[item].position.y += 1.8

        oulu[item].position.z -= 0
        oulu[item].rotation.y=-Math.PI/2
        oulu[item].position.y += 1.8
        oulu[item].position.x  =15.5
    }
    if (item == 3) {
        oulu[item].rotation.y = 1.3 * Math.PI / 4
        oulu[item].position.setZ(0.2)
        oulu[item].position.setX(-1.2)
        oulu[item].position.setY(-0.98)
        oulu[item].scale.setScalar(0.25);
        

        minioulu.add(oulu[item])
        return
    }

    if (item == 4) {
        oulu[item].rotation.y = 2.2 * Math.PI / 4
        oulu[item].position.setZ(1.1)
        oulu[item].position.setX(-0.8)
        oulu[item].position.setY(-0.89)
        oulu[item].scale.setScalar(0.18);
      

        minioulu.add(oulu[item])
        return
    }

    if (item == 5) {
        oulu[item].rotation.y = 1.2 * Math.PI / 4
        oulu[item].position.setZ(-0.1)
        oulu[item].position.setX(-0.4)
        oulu[item].position.setY(-0.95)
        oulu[item].scale.setScalar(0.2);
       

        minioulu.add(oulu[item])
        return
    }

    if (item == 9) {
        oulu[item].rotation.y = Math.PI 
        oulu[item].position.x -= 4.4
        oulu[item].position.z += 10
        oulu[item].position.y += 1
        oulu[item].scale.setScalar(1.4)
    }


    scene.add(oulu[item]);

}



const loader5 = new SVGLoader();
//loader5.load('homeframephoto.svg', function (data2) { loadload(data2, 1) });


function loadload(data2,flag) {
    const paths = data2.paths;
   // alert(flag)
    for (let i = 0; i < paths.length; i++) {

        const path = paths[i];

        const material = new THREE.MeshBasicMaterial({
            color: path.color,
            side: THREE.DoubleSide,
            depthWrite: false
        });

        const shapes = SVGLoader.createShapes(path);
        for (let j = 0; j < shapes.length; j++) { // shapes.length
            const shape = shapes[j];
            const geometry = new THREE.ShapeGeometry(shape);
            const mesh = new THREE.Mesh(geometry, material);
            //alert(mesh.name)
            // mesh.name = param[0] + ', T=' + param[2] + ', Clouds: ' + Math.round(param[3]) + '/8'
            //  group[groupind].add(mesh);
            if (flag == 0) {
                mesh.scale.setScalar(0.003);
                mesh.rotation.y = Math.PI
                mesh.position.y -= 3.3
                mesh.position.z -= 4.2
                mesh.position.x += 1.2
            }
            if (flag == 1) {
                mesh.scale.setScalar(0.009);
                mesh.position.z -= 4.4
                mesh.position.y -= 3.7
                mesh.position.x -= 3.2 +11
            }
           // mesh.scale.setScalar(103);
            scene.add(mesh)
          //  oulu[11].visible = false
        }

    }
}


function naviballvisible(stt) {
    naviball.visible = stt
}


renderer.domElement.addEventListener("click", myFunction);
function myFunction(event) {

    if (tripArray.length > 0) { return }

    //var www = rect.right - rect.left
   // var hhh = rect.bottom - rect.top
   // var xpos = (event.clientX - rect.left) / www
   // var ypos = (event.clientY - rect.top) / hhh

    var www = window.innerWidth
    var hhh = window.innerHeight
    
    var xpos = (event.clientX) / www
    var ypos = (event.clientY) / hhh



    var pointer = new THREE.Vector3(
        (xpos) * 2 - 1,
        - (ypos) * 2 + 1,
        0.5);

    
    
    raycaster.setFromCamera(pointer, camera);

    intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        if (intersects[0].object.name == 'start') {
            intro.visible = false
            loader5.load('./ouluitems/pp_logo.svg', function (data2) { loadload(data2, 0) });

        }

        if (intro.visible == true) { return }


        if (intersects[0].object.name.substring(0, 8) == 'Gohere') {
            naviballvisible(false)
            maketrip([camera.position.x, camera.position.y, camera.position.z, intersects[0].object.position.x, intersects[0].object.position.y, intersects[0].object.position.z],10)
        }

       
        if (intersects[0].object.name == 'kirkko') {
            circle.visible = false; circle2.visible = false; circle3.visible = false;
          //  spotLights[3].target = oulu[3]
         //   spotLights[3].visible = true
            var startend = [camera.position.x, camera.position.y, camera.position.z]
            var forseend = [0, 1, 15]
            var step1 = [startend[0] + 1.5, startend[1] - 1.7, startend[2] - 2.9]
            var step2 = [startend[0] + 0, startend[1] - 1.7, startend[2] - 5]
            var step3 = [startend[0] - 1.0, startend[1] - 1.7, startend[2] - 3.3]
            maketrip(startend.concat(step3, step2, step1, forseend), 40)
            var startendtarget = [followObject.position.x, followObject.position.y, followObject.position.z]
            var targetxx = [camera.position.x + 1.1, camera.position.y - 1.7, camera.position.z - 4.25]
            maketarget(startendtarget.concat(targetxx, targetxx, targetxx, startendtarget))
        }


        if (intersects[0].object.name == 'ainola') {
          //  spotLights[3].target = oulu[4]
          //  spotLights[3].visible = true
            circle.visible = false; circle2.visible = false; circle3.visible = false;
            var startend = [camera.position.x, camera.position.y, camera.position.z]
            var forseend = [0,1,15]
            var step1 = [startend[0] + 2, startend[1] - 1.8, startend[2] - 4.5]
            var step2 = [startend[0] + 1.5, startend[1] - 1.8, startend[2] - 5]
            var step3 = [startend[0] + 1.35, startend[1] - 1.8, startend[2] - 5]
            maketrip(startend.concat(step1, step2, step3, step2, step1, forseend), 40)
            var startendtarget = [followObject.position.x, followObject.position.y, followObject.position.z]
            var targetxx = [camera.position.x + 0.5, camera.position.y - 1.7, camera.position.z - 5.75]
            maketarget(startendtarget.concat(targetxx, targetxx, targetxx, targetxx, targetxx, startendtarget))
        }

        if (intersects[0].object.name == 'ktalo') {
          //  spotLights[3].target = circle3
         //   spotLights[3].visible = true
            circle.visible = false; circle2.visible = false; circle3.visible = false;
            var startend = [camera.position.x, camera.position.y, camera.position.z]
            var forseend = [0, 1, 15]
            var step1 = [startend[0] + 1.0, startend[1] - 1.8, startend[2] - 4]
            var step2 = [startend[0] + 0, startend[1] - 1.8, startend[2] - 4.5]
            var step3 = [startend[0] - 0.6, startend[1] - 1.8, startend[2] - 4.1]
            maketrip(startend.concat(step1, step2, step3, forseend), 40)
            var startendtarget = [followObject.position.x, followObject.position.y, followObject.position.z]
            var targetxx = [camera.position.x + 0, camera.position.y - 1.7, camera.position.z - 3.5]
            maketarget(startendtarget.concat(targetxx, targetxx, targetxx, startendtarget))
        }




        if (intersects[0].object.name == 'Turn90') {

            spotLights[0].visible = false;
            spotLights[1].visible = false;
            spotLights[2].visible = false;
           
            if (followObject.position.x == -15) { var endangle = [-11, followObject.position.y, -4] }
            if (followObject.position.z == 4) { var endangle = [-15, followObject.position.y, 0] }
            if (followObject.position.x == -7) { var endangle = [-11, followObject.position.y, 4] }
            if (followObject.position.z == -4) { var endangle = [-7, followObject.position.y, 0] }
       
            maketarget([followObject.position.x, followObject.position.y, followObject.position.z, endangle[0], endangle[1], endangle[2]])

                return
           
        }
        



        if (intersects[0].object.name == 'Laiva') {
            if (camera.position.x > 5) {
                angle =  Math.PI / 2
                maketarget([followObject.position.x, followObject.position.y, followObject.position.z, 0, 0, 0])
                maketrip([camera.position.x, camera.position.y, camera.position.z, 11, 1, 4,  4, -0.5, 0],10)
                roomnro = 0
                pointLight2.visible = false
                naviballvisible(false)
            }
            else {
                maketarget([followObject.position.x, followObject.position.y, followObject.position.z, 11, 0, 0])
               // maketrip([camera.position.x, camera.position.y, camera.position.z, 0, 0, 0, 6, 1, 0], 10)
                maketrip([camera.position.x, camera.position.y, camera.position.z, 0, 0, 0, 6, 1, 0, 10, 1, 4, 12, 3, 4], 10)
                roomnro = 2

            }


            doornro = 0
        }
        if (intersects[0].object.name == 'Oulu') {

            if (camera.position.x <-5) {
                angle =  - Math.PI / 2
                maketarget([followObject.position.x, followObject.position.y, followObject.position.z, 0, 0, 0])
                maketrip([camera.position.x, camera.position.y, camera.position.z, -4, -0.5, 0], 10)
                roomnro = 0
            }
            else {
                maketarget([followObject.position.x, followObject.position.y, followObject.position.z, -15, 0, 0])
                maketrip([camera.position.x, camera.position.y, camera.position.z, 0, 0, 0, -11, 0, 0], 10)
                roomnro = 1
            }
            doornro = 1
        }
        if (intersects[0].object.name == 'Mini-') {


            if (camera.position.z > 5) {
                circle.visible = false; circle2.visible = false; circle3.visible = false;
                maketarget([followObject.position.x, followObject.position.y, followObject.position.z, 0, 0, 0])
                maketrip([camera.position.x, camera.position.y, camera.position.z, -3, 1, 14, -3, 1, 8,  0, -0.5, 4], 10)
                angle = 0
                roomnro = 0
            }
            else {
                maketarget([followObject.position.x, followObject.position.y, followObject.position.z, 0, -0.5, 11])
   //             maketrip([camera.position.x, camera.position.y, camera.position.z, 0, 0, 0, 3, 1, 11, 0, 1, 15], 10)
                maketrip([camera.position.x, camera.position.y, camera.position.z, 0, 0, 0, 0, 1, 8, 3, 1, 8, 3, 1, 14, 0, 1, 15], 10)

                roomnro = 3
            }
            
            doornro = 2
        }

 
    }

  
  
}

function maketrip(temp,mave) {

    var xArray = [];
    var yArray = [];
    var zArray = [];

    for (let j = 0; j < ((temp.length)/3-1); j++) {
      //  temp2 = temp[j][0]

        for (let i = 0; i <= 100; i++) {
           // tripArray.push(i / 100 * temp[3 + 3 * j] + (100 - i) / 100 * temp[0 + 3 * j])
          //  tripArray.push(i / 100 * temp[4 + 3 * j] + (100 - i) / 100 * temp[1 + 3 * j])
           // tripArray.push(i / 100 * temp[5 + 3 * j] + (100 - i) / 100 * temp[2 + 3 * j])

            xArray.push(i / 100 * temp[3 + 3 * j] + (100 - i) / 100 * temp[0 + 3 * j])
            yArray.push(i / 100 * temp[4 + 3 * j] + (100 - i) / 100 * temp[1 + 3 * j])
            zArray.push(i / 100 * temp[5 + 3 * j] + (100 - i) / 100 * temp[2 + 3 * j])



        }
    }



   
    xArray = movingAverage(xArray, mave)
    yArray = movingAverage(yArray, mave)
    zArray = movingAverage(zArray, mave)

    for (let i = 0; i < xArray.length; i++) {
        tripArray.push(xArray[i]);
        tripArray.push(yArray[i]);
        tripArray.push(zArray[i]);
    }


}


function movingAverage(arr,ste) {
    let result = [];
    let windowSum = 0;
    let countter = 0;
    for (let i = 0; i < arr.length; i++) {
        windowSum = 0;
        countter = 0;
        var ste2 =  Math.min(ste, i + 1, arr.length - i + 2);
        
        for (let j = Math.max(i - ste2, 0); j < Math.min(i + ste2, arr.length); j++) {
            windowSum += arr[j]
            countter++
        }
        result.push(windowSum / countter);
    }

    return result;
}
 



function maketarget(temp) {

    for (let j = 0; j < ((temp.length) / 3 - 1); j++) {
        //  temp2 = temp[j][0]



        for (let i = 0; i <= 100; i++) {
            targetArray.push(i / 100 * temp[3 + 3 * j] + (100 - i) / 100 * temp[0 + 3 * j])
            targetArray.push(i / 100 * temp[4 + 3 * j] + (100 - i) / 100 * temp[1 + 3 * j])
            targetArray.push(i / 100 * temp[5 + 3 * j] + (100 - i) / 100 * temp[2 + 3 * j])

 
        }
    }

}






var tripArray=[]
var targetArray = []



var doornro = -1
var roomnro = 0
var angle = 0
//var tofrom =[]
//var starttarget =[]
var flickcounter = 0

function animate() {
    requestAnimationFrame(animate) 
  //  angle -= 0.01

    if (circle.visible == true) {
        flickcounter++
        if (flickcounter < 40) { spotLights[3].target = circle }
        if (flickcounter > 39 && flickcounter < 80) { spotLights[3].target = circle2 }
        if (flickcounter > 79) { spotLights[3].target = circle3 }
        if (flickcounter > 119) { flickcounter =-1}
        spotLights[3].visible = true
    }
    else {
        flickcounter = 0
        spotLights[3].visible =false
    }

  


  //  spotLights[3].visible = true
//spotLights[3].target = circle




    if (doornro > -1) { 
        if (doors[doornro].rotation.y > -1.5 * Math.PI / 2) {
            doors[doornro].rotation.y -= 0.03
         
        }
   
        
    }
    
    for (let i = 0; i < 3; i++) {
        
        if (doors[i].rotation.y < 0 && i != doornro) {   
            doors[i].rotation.y += 0.01
            if (i == 0 && pointLight2.visible == false && roomnro==2) {
                pointLight2.visible = true
            }
        }
   }



    if (targetArray.length > 0) {

        //alert(targetArray)
        followObject.position.x = targetArray[0]
        followObject.position.y = targetArray[1]
        followObject.position.z = targetArray[2]
        targetArray.splice(0, 3);

        if (targetArray.length < 10) {
            if (followObject.position.x == -15) { spotLights[0].visible = true }
            if (followObject.position.x == -11 && followObject.position.z == -4) { spotLights[2].visible = true }
            if (followObject.position.x == -11 && followObject.position.z == 4) { spotLights[1].visible = true }
         
        
        }
      
    }

    if (tripArray.length > 0) {


    



        camera.position.x = tripArray[0]
        camera.position.y = tripArray[1]
        camera.position.z = tripArray[2]

        tripArray.splice(0, 3);


        if (camera.position.x > 4.4 && camera.position.x < 4.6) { doornro = -1; }
        if (camera.position.x > -4.6 && camera.position.x < -4.4) { doornro = -1 }
        if (camera.position.z > 4.4 && camera.position.z < 4.6) { doornro = -1 }

     
        if (camera.position.z > 14.6 && camera.position.x < 0.1 && tripArray.length < 20) {
         //   camera.position.z = 15
         //   camera.position.x = 0
        //    camera.position.y =1
            

            circle.visible = true; circle2.visible = true; circle3.visible = true; 
        }

        if (camera.position.x > 6 && tripArray.length < 2) {
        
            setTimeout(function () {
                naviballvisible(true)
            }, 1000);
            
        }



        camera.lookAt(followObject.position);
        renderer.render(scene, camera);

        return
    }








    if (roomnro == 0 && automove == 1) {
        angle -= 0.01


        if (intro.visible == true) { angle = 0 }


       // angle=0
        if (angle < 0) { angle += 2 * Math.PI }
        camera.position.x = -0 + 4 * Math.sin(angle);
        camera.position.z = 4 * Math.cos(angle);
        camera.position.y = -0.5
        followObject.position.x = -0
        followObject.position.z = 0
        camera.lookAt(followObject.position);
        renderer.render(scene, camera);
        return
    }

 


    
    camera.lookAt(followObject.position);
    renderer.render(scene, camera);
}

animate()




function Writewrite(texttext, thismaterial, xxx, yyy, zzz, thisvisible, thiscenter, thissize) {


    const thistextprop = new TextGeometry(texttext, {
        font: font,
        size: 90,
        height: 10,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 1,
        bevelSegments: 1
    });



    thistextprop.computeBoundingBox();
    const xMid = - 0.5 * (thistextprop.boundingBox.max.x - thistextprop.boundingBox.min.x);
    const yMid = - 0.5 * (thistextprop.boundingBox.max.y - thistextprop.boundingBox.min.y);
    const zMid = - 0.5 * (thistextprop.boundingBox.max.z - thistextprop.boundingBox.min.z);
    if (thiscenter == 1) {
        thistextprop.translate(xMid, yMid, zMid);
    }
 
    const temp = new THREE.Mesh(thistextprop, thismaterial);

 
    temp.position.set(xxx, yyy, zzz)
    temp.scale.set(0.004, 0.004, 0.004)
    temp.rotateY(Math.PI / 1)

    if (thisvisible == 0) {
        temp.visible = false;
    }


    return temp


}
