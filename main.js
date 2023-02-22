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


var www
var hhh
var aspectratio
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);



const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    //antialias: true,
});


window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {

    www = window.innerWidth
    hhh = window.innerHeight
    aspectratio = www / hhh

    camera.aspect = aspectratio;

    if (www < 750) { camera.fov = 95 }
    if (www >= 750) { camera.fov = 75 }
    camera.updateProjectionMatrix();
   
    renderer.setSize(www, hhh);
    renderer.setPixelRatio(window.devicePixelRatio);
}


onWindowResize()




const edgeMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
const doormaterial = new THREE.MeshStandardMaterial({ color: 0xaa00aa });
const textmaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
const greenmaterial = new THREE.MeshStandardMaterial({ color: 0x00aa00 });
var circle = []


const minioulu = miniaturetable(doormaterial, edgeMaterial, './ouluitems/ouluplane.png')
scene.add(minioulu)


const followObject = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), edgeMaterial);


const doors = []


function wallwithdoorhole(wallMaterial, textcontainer, i) {

    var roomx = 10
    var roomy = 10

    const roomGeometry2 = new THREE.BoxGeometry(roomx - 7, roomy, 1);
    const roomGeometry3 = new THREE.BoxGeometry(roomx, roomy - 7, 1);
    const doorGeometry = new THREE.BoxGeometry(4, 7, 1);

    const wallhole = new THREE.Group();

    const walla = new THREE.Mesh(roomGeometry2, wallMaterial);
    walla.position.x += 3.5

    const wallb = new THREE.Mesh(roomGeometry2, wallMaterial);
    wallb.position.x -= 3.5

    const wallc = new THREE.Mesh(roomGeometry3, wallMaterial);
    wallc.position.y += 3.5

    const thisdoor = new THREE.Group();

    if (i == 0) {
        const door = new THREE.Mesh(doorGeometry, doormaterial);
        door.position.y -= 1.5
        door.position.z += 0.5
        door.position.x -= 2

        thisdoor.add(door)
        const thistext = Writewrite(textcontainer[0], textmaterial, 0, 0, 0, 1, 1,  0.004)
        const thistext2 = Writewrite(textcontainer[1], textmaterial, 0, -0.5, 0, 1, 1, 0.004)
        const thistext3 = Writewrite('Aula', textmaterial, 0, -0.25, 0, 1, 1, 0.004)
        thistext.position.x -= 2
        thistext2.position.x -= 2
        thistext3.position.x -= 2
        thistext.rotation.y = Math.PI
        thistext2.rotation.y = Math.PI
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



var spotLights = []
for (let i = 0; i < 5; i++) {
    spotLights[i] = new THREE.SpotLight(0xffffff, 0.6);
    spotLights[i].angle = 0.78
    spotLights[i].position.x = -11
    spotLights[i].position.y = 0
    scene.add(spotLights[i]);
    spotLights[i].visible = false
}


spotLights[4].position.x = 0
spotLights[4].position.y = 3
spotLights[4].position.z = 11
spotLights[4].angle = 0.07



var clickframeGeometry = new THREE.BoxGeometry(5.3, 5.3, 1.09);
var frameGeometry = new THREE.BoxGeometry(5.2, 5.2, 1.1);
var paintingGeometry = new THREE.BoxGeometry(4.8, 4.8, 1.11);

const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });


const naviball = new THREE.Group();
addnaviball(doormaterial)
scene.add(naviball)


var roomxx = 10
var roomyy = 10
var roomzz = 10

var wallw = [roomxx, roomxx, roomxx, roomzz, roomzz, roomxx]
var wallh = [roomzz, roomyy, roomyy, roomyy, roomyy, roomzz]


const roommaterials =[]

roommaterials[0] = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/floor-texture.png') });
roommaterials[1] = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/ceiling-texture2.png') });
roommaterials[2] = new THREE.MeshStandardMaterial({ color: 0x988064 });
roommaterials[3] = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/brickwall.png') });
roommaterials[4] = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/concretewall.png') });
roommaterials[5] = new THREE.MeshStandardMaterial({ color: 0x000055 });


const paintingmaterials = []

paintingmaterials[0] = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/oldhouse2.png') });
paintingmaterials[1] = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/riverfishing.png') });
paintingmaterials[2] = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/riverburning.png') });
paintingmaterials[3] = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/oulufinland.png') });
paintingmaterials[4] = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/starttext.png') });
paintingmaterials[5] = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/tauno.jpg') });
paintingmaterials[6] = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/Franzen.png') });
paintingmaterials[7] = new THREE.MeshStandardMaterial({ map: textureLoader.load('./ouluitems/taunotext2.png') });



const roomcontent = []

for (let i = 0; i < 4; i++) {
    roomcontent[i] = new Array(6);

    for (let j = 0; j < 6; j++) {
        // Calculate the value for each element based on its row and column
        if (j == 0) { roomcontent[i][j] = '0' }
        if (j == 5) { roomcontent[i][j] = '1' }
        if (j > 0 && j < 5 && i==0) { roomcontent[i][j] = '2' }
        if (j > 0 && j < 5 && i == 1) { roomcontent[i][j] = '5' }
        if (j > 0 && j < 5 && i == 2) { roomcontent[i][j] = '3' }
        if (j ==1 && i == 2) { roomcontent[i][j] = '4' }
        if (j > 0 && j < 5 && i == 3) { roomcontent[i][j] = '4' }
        var tempadd = ',0'
        if (i == 0 && j == 1) { var tempadd = ',1' }
        if (i == 0 && j == 2) { var tempadd = ',2' }
        if (i == 0 && j == 3) { var tempadd = ',3' }
        if (i == 1 && j == 2) { var tempadd = ',1' }
        if (i == 2 && j == 1) { var tempadd = ',2' }
        if (i == 3 && j == 4) { var tempadd = ',3' }
        roomcontent[i][j] = roomcontent[i][j] + tempadd
    }
}


roomcontent[0][4] = roomcontent[0][4] + ',TS_0_4.1_0.003_Voit klikata kaikkea violettia. Klikkaa ensin t\u00E4st\u00E4!'

roomcontent[0][4] = roomcontent[0][4] + ',T_0_3_0.008_Pohjois-'
roomcontent[0][4] = roomcontent[0][4] + ',T_0_2_0.008_Pohjanmaan'
roomcontent[0][4] = roomcontent[0][4] + ',T_0_0.8_0.008_museo'

roomcontent[0][4] = roomcontent[0][4] + ',P_-2.2_-2.3_0.55_0.55_5'
roomcontent[0][4] = roomcontent[0][4] + ',P_-2.2_-0.7_0.55_0.12_7'

roomcontent[2][3] = roomcontent[2][3] + ',PF1_0_0_1_1_0'
roomcontent[2][2] = roomcontent[2][2] + ',PF0_0_0_1_1_1'
roomcontent[2][4] = roomcontent[2][4] + ',PF2_0_0_1_1_2'
roomcontent[2][1] = roomcontent[2][1] + ',PF3_-3.2_0_0.4_0.5_6'

roomcontent[3][3] = roomcontent[3][3] + ',P_0_0.4_1_1.2_3'

const rooms = [];

for (let i = 0; i < 4; i++) {
    rooms[i] = new THREE.Group();

    for (let j = 0; j < 6; j++) {
        const infostring = roomcontent[i][j]
        const arr = infostring.split(",");
        const thismaterial = roommaterials[Number(arr[0])]
 
        if (Number(arr[1]) == 1) {
            var thiswall = wallwithdoorhole(thismaterial, ['Laiva', 'Toivo'], i)
        }
        if (Number(arr[1]) == 2) {
            var thiswall = wallwithdoorhole(thismaterial, ['Oulu', 'Art'], i)
        }
        if (Number(arr[1]) == 3) {
            var thiswall = wallwithdoorhole(thismaterial, ['Mini-', 'Oulu'], i) 
        }     
        if (Number(arr[1]) == 0) {
            var thiswallGeometry = new THREE.BoxGeometry(wallw[j], wallh[j], 1);
            var thiswall = new THREE.Mesh(thiswallGeometry, thismaterial);
          
        }

        for (let k = 0; k < arr.length; k++) {
            if (arr[k][0] == 'T') {              
                var arr2 = arr[k].split("_");
                var temptext = Writewrite(arr2[4], textmaterial, Number(arr2[1]), Number(arr2[2]), 0.6, 1, 1, Number(arr2[3]))
                if (arr[k][1] == 'S') {
                    var temp2 = temptext
                    temptext.name = 'start'
                }
                thiswall.add(temptext)             
            }
            if (arr[k][0] == 'P') {
                var arr2 = arr[k].split("_");
               //thiswall.add(new THREE.Mesh(frameGeometry, frameMaterial))


                var temppaint = []
                temppaint[0] = new THREE.Mesh(frameGeometry, frameMaterial)
                temppaint[1] = new THREE.Mesh(paintingGeometry, paintingmaterials[Number(arr2[5])])
                temppaint[2] = new THREE.Mesh(clickframeGeometry, doormaterial)

                var nrolayers = 2



                if (arr[k][1] == 'F') {
                    var numnum = Number(arr[k][2])
                    if (numnum > -1 && numnum < 4) {
                        spotLights[numnum].target = thiswall
                    }
                    nrolayers = 3
                    temppaint[0].name = 'Turn90'
                    temppaint[1].name = 'Turn90'
                    temppaint[2].name = 'Turn90'
                }


                for (let p = 0; p < nrolayers; p++) {
                    temppaint[p].position.y = Number(arr2[2])
                    temppaint[p].position.x = Number(arr2[1])

                    temppaint[p].scale.y = Number(arr2[4])
                    temppaint[p].scale.x = Number(arr2[3])         
                    thiswall.add(temppaint[p])

                }

            }
        }
        
        
        if (j == 0) {thiswall.position.y = -roomyy / 2; thiswall.rotation.x = Math.PI / 2;}
        if (j == 1) {thiswall.position.x = roomxx / 2; thiswall.rotation.y = Math.PI / 2;}
        if (j == 2) {thiswall.position.x = -roomxx / 2;thiswall.rotation.y = -Math.PI / 2; }
        if (j == 3) {thiswall.position.z = roomzz / 2; }
        if (j == 4) {thiswall.position.z = -roomzz / 2; }
        if (j == 5) {thiswall.position.y = roomyy / 2; thiswall.rotation.x = Math.PI / 2;  }


        rooms[i].add(thiswall)
    }
    scene.add(rooms[i])
}


rooms[1].position.x += 11
rooms[2].position.x -= 11
rooms[3].position.z += 11
minioulu.position.z += 11



const temp3 = new THREE.Mesh(new THREE.PlaneGeometry(10, 0.7), doormaterial);
temp3.position.y = 4.1
temp3.position.z = -4.4
temp3.name='start'

const bgcircle = new THREE.Mesh(new THREE.CircleGeometry(1.9, 32), greenmaterial);
bgcircle.position.z = -4.4
bgcircle.position.x = 2.15
bgcircle.position.y = -2.1

scene.add(temp3, bgcircle)


const pointLight = new THREE.PointLight(0xffffff, 0.4);
pointLight.position.set(0, 3, 0);

const pointLight2 = new THREE.PointLight(0xffffff, 0.6);
pointLight2.position.set(11, -1, 0);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight, pointLight, pointLight2);

pointLight2.visible=false

//const controls = new OrbitControls(camera, renderer.domElement);

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader2 = new GLTFLoader();


loader2.load('./ouluitems/PositiveSnowflake_sunset_extended.glb', function (model) { glbtopos(model.scene, [10.2 - 0.2, -4.4, -0.8 - 0.2, 0, Math.PI / 4, Math.PI, 0.85], 0) });
loader2.load('./ouluitems/PositiveSnowflake_sunset_extended.glb', function (model) { glbtopos(model.scene, [10.2 + 1.8, -4.4, -0.8 + 1.8, 0, Math.PI / 4, Math.PI, 0.85], 0) });

loader2.load('./ouluitems/toivo_prop3.glb', function (model) { glbtopos(model.scene, [12, -1.55, 1, 0, Math.PI / 4, 0, 0.32], 0) });
loader2.load('./ouluitems/blue2026.glb', function (model) { glbtopos(model.scene, [15.5, 1.8, 0, 0, -Math.PI / 2, 0, 1], 0) });
loader2.load('./ouluitems/ouluCoat.glb', function (model) { glbtopos(model.scene, [-4.4, 1, 10, 0, Math.PI, 0, 1.4],0) });

loader2.load('./ouluitems/tuomio_mesh_cleanup_cut.glb', function (model) { glbtopos(model.scene, [-1.2, -0.98, 0.2, 0, 1.3 * Math.PI / 4, 0, 0.25], 1) });
loader2.load('./ouluitems/ainola.glb', function (model) { glbtopos(model.scene, [-0.8, -0.89, 1.1, 0, 2.2 * Math.PI / 4, 0, 0.18], 1) });
loader2.load('./ouluitems/Kaup_only.glb', function (model) { glbtopos(model.scene, [-0.4, -0.95, -0.1, 0, 1.2 * Math.PI / 4, 0, 0.2], 1) });


function glbtopos(model, glbpos, mode) {
   
    model.position.setX(glbpos[0])
    model.position.setY(glbpos[1])
    model.position.setZ(glbpos[2])

    model.rotation.x = glbpos[3]
    model.rotation.y = glbpos[4]
    model.rotation.z = glbpos[5]

    model.scale.setScalar(glbpos[6]);
    if (mode == 0) { scene.add(model) }
    if (mode == 1) { minioulu.add(model) }
   
}


const loader5 = new SVGLoader();
loader5.load('./ouluitems/pp_logo.svg', function (data2) { svgtopos(data2, [0.5, -0.5, -4.2, 0, Math.PI, Math.PI, 0.004]) });

function svgtopos(data2, svgpos) {
    const paths = data2.paths;
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
           
            mesh.position.setX(svgpos[0])
            mesh.position.setY(svgpos[1])
            mesh.position.setZ(svgpos[2])

            mesh.rotation.x = svgpos[3]
            mesh.rotation.y = svgpos[4]
            mesh.rotation.z = svgpos[5]
            mesh.scale.setScalar(svgpos[6]);
            scene.add(mesh)
  
        }

    }
}



renderer.domElement.addEventListener("click", myFunction);
function myFunction(event) {

    if (tripArray.length > 0) { return }

    var pointer = new THREE.Vector3(
        ((event.clientX) / www) * 2 - 1,
        - ((event.clientY) / hhh) * 2 + 1,
        0.5);

    
    
    raycaster.setFromCamera(pointer, camera);
    intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        if (intersects[0].object.name == 'start') {
            temp2.visible = false
            temp3.visible = false
          //  temp4.visible = false
        }

        if (temp3.visible == true) { return }


        if (intersects[0].object.name.substring(0, 8) == 'Gohere') {
            naviballvisible(false)
            maketrip([camera.position.x, camera.position.y, camera.position.z, intersects[0].object.position.x, intersects[0].object.position.y, intersects[0].object.position.z],10)
        }

       
        if (intersects[0].object.name == 'kirkko') {
            circleshow(false)

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
 
            circleshow(false)
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

            circleshow(false)
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
            spotLights[3].visible = false;
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
                angle = - Math.PI / 2
                spotLights[3].visible = false;
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
                circleshow(false)
                maketarget([followObject.position.x, followObject.position.y, followObject.position.z, 0, 0, 0])
                maketrip([camera.position.x, camera.position.y, camera.position.z, -3, 1, 14, -3, 1, 8,  0, -0.5, 4], 10)
                angle = 0
                roomnro = 0
            }
            else {
                maketarget([followObject.position.x, followObject.position.y, followObject.position.z, 0, -0.5, 11])
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
 
        for (let i = 0; i <= 100; i++) {
 
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

var flickcounter = 0

function animate() {
    requestAnimationFrame(animate) 

    if (circle[0].visible == true) {      
        flickcounter++
        if (flickcounter > 119) { flickcounter = 0 }
        spotLights[4].target = circle[2-Math.floor(flickcounter / 40)]
        spotLights[4].visible = true
    }
    else {
        spotLights[4].visible =false
    }

  
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
            if (followObject.position.x == -7 && followObject.position.z == 0) { spotLights[3].visible = true }
             
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
         //   camera.position.z = 15  camera.position.x = 0  camera.position.y =1
            circleshow(true) 
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


    if (roomnro == 0) {
        angle -= 0.01


        if (temp3.visible == true) { angle = 0 }


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
    temp.scale.set(thissize, thissize, thissize)
  //  temp.rotateY(Math.PI / 1)

    if (thisvisible == 0) {
        temp.visible = false;
    }


    return temp


}



function miniaturetable(doormaterial, edgeMaterial, pathtoplane) {

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

    var circleGeometry = new THREE.CircleGeometry(0.35, 15);

    for (let i = 0; i < 3; i++) {


        var posx = [1, 0.8, 0.3]
        var posz = [-0.2, -1.27, 0.06]
        var cicrlename = ['kirkko', 'ainola', 'ktalo']

        circle[i] = new THREE.Mesh(circleGeometry, doormaterial);
        circle[i].rotation.x = Math.PI / 2

        circle[i].rotation.y = Math.PI
        circle[i].position.z = 11;
        circle[i].position.y = -0.5;

        circle[i].visible = false;
        scene.add(circle[i])
        circle[i].position.x += posx[i]
        circle[i].position.z += posz[i]
        circle[i].name = cicrlename[i]

    }


    return minioulu
}

function addnaviball(doormaterial) {

    var ballgeometry = new THREE.SphereGeometry(0.5, 16, 16);
    var mysphere = new THREE.Mesh(ballgeometry, doormaterial);

    mysphere.name = 'Gohere'



    var sphereposx = [4, 4, 4, 4, -4, -4, -4, -4]
    var sphereposy = [4.5, 4.5, -4.5, -4.5, 4.5, 4.5, -4.5, -4.5]
    var sphereposz = [4, -4, 4, -4, 4, -4, 4, -4]

    for (let j = 1; j < 3; j++) {

        for (let i = 0; i < sphereposx.length; i++) {
            var temp = mysphere.clone()
            temp.position.x = sphereposx[i] / j + 11

            temp.position.y = sphereposy[i] / j
            if (j == 2) { temp.position.y = 0.5 }
            temp.position.z = sphereposz[i] / j
            naviball.add(temp)


            //  scene.add(temp)
        }
        mysphere.scale.setScalar(0.2)
    }
    mysphere.scale.setScalar(0.1)
    var aag = Math.PI / 4
    for (let i = 0; i < 360; i += 20) {
        var temp = mysphere.clone()
        var x1 = 4 * Math.sin(i * 2 * Math.PI / 180);
        var y1 = 1.5 * Math.cos(i * 2 * Math.PI / 180);
        temp.position.y = 0.5
        temp.position.x = x1 * Math.cos(aag) - y1 * Math.sin(aag) + 11
        temp.position.z = x1 * Math.sin(aag) + y1 * Math.cos(aag)
        naviball.add(temp)
    }

    for (let i = 0; i < 10; i += 2) {
        var temp = mysphere.clone()
        var x1 = 0.5 * i - 2.5
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
    naviball.visible = false
}


function circleshow(state) {
    for (let i = 0; i < 3; i++) {
        circle[i].visible = state
    }
}

function naviballvisible(stt) {
    naviball.visible = stt
}