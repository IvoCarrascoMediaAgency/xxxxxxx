// codigo para bloquear click erecho
document.oncontextmenu = function(){return false}

// codigo para mostrar elpopup cada minuto
const myTimeout = setTimeout(myGreeting, 300000);
// setIntervales "repetir esta función cada N milisegundos". setTimeoutes "ejecutar esta función una vez después de N milisegundos"
function myGreeting() {
  $('#exit').addClass('visible');
}


// codigo para mostrar al pie de pagina el counter

       $(document).ready(function(){
        var altura =$('.row-centeredw').offset().top;
        $(window).on('scroll', function(){
          if ($(window).scrollTop()>= altura){
            $('.row-centeredw').addClass('row-centered2w');
            // $('.count').addClass('row-centered2count');

          } else{
            $('.row-centeredw').removeClass('row-centered2w');
            // $('.count').removeClass('row-centered2count');
          }
        })
      });



  
  
let movuevete= document.getElementById('rowf');

 function moverseA(){

  location = ('#masvendidos1');
}
      
 // código para mostrar el modal cuando quieres salir de la pagina

const mouseEvent = e => {
  const shouldShowExitIntent = 
      !e.toElement && 
      !e.relatedTarget &&
      e.clientY < 2;

  if (shouldShowExitIntent) {
      document.removeEventListener('mouseout', mouseEvent);
      
      document.querySelector('.exit-intent-popup').classList.add('visible');
  }
};

const exit = e => {
  if (e.target.className === 'close') {
      document.querySelector('.exit-intent-popup').classList.remove('visible');
  }

  if (e.target.className === 'masv') {
    document.querySelector('.exit-intent-popup').classList.remove('visible');
}
};

document.querySelector('.exit-intent-popup').addEventListener('click', exit);
 
setTimeout(() => {
  document.addEventListener('mouseout', mouseEvent);
  document.addEventListener('keydown', exit);
}, 2_000);


 
  // code for hide value of pruebnumber

    
 




const pedido_store = {
    /*PROPIEDAD : TIPO LISTA DE OBJETOS*/
    categories:{
      //CATEGORIAS DE PRODUCTOS A OFERTAR
    //   'C0':{
    //     items:{
    
    //       'I1':{
    //           name:'Gratis',
    //           antes:19.99,
    //           price:0.00,
    //           qty:0,
    //           img:'img/img/pc/whatsapp-marketing-gratis.webp',
    
    //           detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i> Licencia 24 horas</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li>  <li> <i ></i>Envía Imágenes y Videos con Descripción</li>  <li> <li> <li> <span class="masc">Incluye PRO tools: </span></li><li><span class="masc">Entrenador de Cuentas/Chips</span></li><li><span class="masc">Auditor de cuentas/chips para evitar bloqueos</span></li><li><span class="masc">Auditor de cuentas/chips para evitar bloqueos</span></li><li><span class="masc">Extractor de contactos</span></li><li><span class="masc">Generador de Catálogos</span></li><li><span class="masc">Filtro avanzado de números de WhatsApp</span></li><li><span class="masc">Módulo Open AI ChatGPT-4</span></li></ul></div></div>',
    //           linkpago:'',
            
    //           },
  
           
          
    //       'I2':{
    //           name:'PC Anual + 1 Mes GRATIS',
    //           antes:159.98,
    //           price:79.99,
    //           qty:0,
    //           img:'img/img/pc/whatsapp-marketing-digital.webp',
    //           detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i> Licencia Anual + Un mes GRATIS</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li>  <li> <i ></i>Envía Imágenes y Videos con Descripción</li>  <li> <li> <li> <span class="masc">Incluye PRO tools: </span></li><li><span class="masc">Entrenador de Cuentas/Chips</span></li><li><span class="masc">Auditor de cuentas/chips para evitar bloqueos</span></li><li><span class="masc">Auditor de cuentas/chips para evitar bloqueos</span></li><li><span class="masc">Extractor de contactos</span></li><li><span class="masc">Generador de Catálogos</span></li><li><span class="masc">Filtro avanzado de números de WhatsApp</span></li><li><span class="masc">Módulo Open AI ChatGPT-4</span></li></ul></div></div>',
    //           linkpago:'https://payp.page.link/Eah9',
    //           },
  
    //           'I3':{
    //             name:'PC 24 Meses + 2 Meses GRATIS',
    //             antes:239.98,
    //             price:119.99,
    //             qty:0,
    //             img:'img/img/pc/whatsapp-marketing-descargar.webp',
    //             detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i> Licencia 2 años + 2 Meses GRATIS</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li>  <li> <i ></i>Envía Imágenes y Videos con Descripción</li>  <li> <li> <li> <span class="masc">Incluye PRO tools: </span></li><li><span class="masc">Entrenador de Cuentas/Chips</span></li><li><span class="masc">Auditor de cuentas/chips para evitar bloqueos</span></li><li><span class="masc">Auditor de cuentas/chips para evitar bloqueos</span></li><li><span class="masc">Extractor de contactos</span></li><li><span class="masc">Generador de Catálogos</span></li><li><span class="masc">Filtro avanzado de números de WhatsApp</span></li><li><span class="masc">Módulo Open AI ChatGPT-4</span></li></ul></div></div>',
    //             linkpago:'https://payp.page.link/DLKe',
    //             },
  
    //             'I4':{
    //               name:'PC LifeTime',
    //               antes:799.98,
    //               price:399.99,
    //               qty:0,
    //               img:'img/img/pc/marketing-whatsapp-business.webp',
    //               detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i> Licencia de por vida</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li>  <li> <i ></i>Envía Imágenes y Videos con Descripción</li>  <li> <li> <li> <span class="masc">Incluye PRO tools: </span></li><li><span class="masc">Entrenador de Cuentas/Chips</span></li><li><span class="masc">Auditor de cuentas/chips para evitar bloqueos</span></li><li><span class="masc">Auditor de cuentas/chips para evitar bloqueos</span></li><li><span class="masc">Extractor de contactos</span></li><li><span class="masc">Generador de Catálogos</span></li><li><span class="masc">Filtro avanzado de números de WhatsApp</span></li><li><span class="masc">Módulo Open AI ChatGPT-4</span></li></ul></div></div>',
    //               linkpago:'https://payp.page.link/WGxT',
    //               },
              
    
          // 'I5':{
          //     name:'Franquiciado | White Label',
          //     antes:0.00,
          //     price:0.00,
          //     qty:0,
          //     img:'img/img/win/whitelabel-basica.webp',
          //     detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Crea tu negocio con tu propia marca</span></li><li><i></i> Plataforma Web-Ecommerce + Pasarela de pagos</li><li><i class="fas fa-stop-circle"></i> Generador de Credenciales</li><li><i ></i> Dominio y Hosting</li><li> <i></i>Actualizaciones (versiones BETA)</li><li><i ></i> Plantillas Publicitarias y artes para ADS y redes sociales con tu marca</li><li><i ></i> Capacitación, Asesoría y Soporte</li> <br><span class="masc">BONOS:</span> <li><i ></i>Chat Multiagente WEB</li> <li> <i></i>WhatsApp Ecommerce</li> </ul></div></div>',
          //     linkpago:'',
          //     },
        
  
         
          
        // },
          /*NOMBRE CATEGORIA*/
        //   namec:'',
        // },
      // 0
      'C1':{
      items:{
  
        'I1':{
            name:'Licencia Semestral',
            antes:39.98,
            price:19.99,
            qty:0,
            img:'img/imgproduc/crm-whatsapp-gratis.webp',
  
            detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i>1 cuenta CRM WhatsApp Semestral</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li>  <li> <i ></i>Envía Imágenes y Videos con Descripción</li><li> <i ></i>Programar campañas masivas</li><li> <i ></i>Gestión de contactos</li><li> <i ></i>Genera embudos de venta</li><li> <i ></i>ChatBot + WorkFlow + Menús</li><li> <i ></i>Crea Reglas Automatizadas</li> <li> <i ></i>Crea recordatorios recurrentes</li> <li> <i ></i>Agrega atributos personalizados CRM</li><li> <i ></i>Crea recordatorios y notas de trabajo</li><li><li> <i ></i>Crea respuestas rápidas</li><li> <i ></i>Genera Plantillas</li><li> <i ></i>Exporta e importa Backups</li> <li> <li> <span class="masc">Soporte </span></li><li><span class="masc">Capacitación con videos tutoriales</span></li></ul></div></div>',
            linkpago:'https://ppls.me/bhj7mtJhTb7AAm9jyucwOg',
            },

         
        
        'I2':{
            name:'Licencia Anual',
            antes:239.98,
            price:119.99,
            qty:0,
            img:'img/imgproduc/crm-para-whatsapp-y-redes-sociales.webp',
            detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i>1 cuenta CRM WhatsApp 12 Meses</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li>  <li> <i ></i>Envía Imágenes y Videos con Descripción</li><li> <i ></i>Programar campañas masivas</li><li> <i ></i>Gestión de contactos</li><li> <i ></i>Genera embudos de venta</li><li> <i ></i>ChatBot + WorkFlow + Menús</li><li> <i ></i>Crea Reglas Automatizadas</li> <li> <i ></i>Crea recordatorios recurrentes</li> <li> <i ></i>Agrega atributos personalizados CRM</li><li> <i ></i>Crea recordatorios y notas de trabajo</li><li><li> <i ></i>Crea respuestas rápidas</li><li> <i ></i>Genera Plantillas</li><li> <i ></i>Exporta e importa Backups</li> <li> <span class="masc">Soporte 24/7</span></li><li><span class="masc">Actualizaciones GRATIS</span></li><li><span class="masc">Capacitación Personalizada</span></li></ul></div></div>',
            linkpago:'https://ppls.me/XzjJG9TNCHKWHtTPq3ZvMg',
            },

            // 'I3':{
            //   name:'Básico 24 Meses + 2 Meses GRATIS',
            //   antes:479.98,
            //   price:239.99,
            //   qty:0,
            //   img:'img/imgproduc/mejores-crm-para-whatsapp.webp',
            //   detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i>1 cuenta CRM WhatsApp 24 Meses + 2 meses Gratis</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li>  <li> <i ></i>Envía Imágenes y Videos con Descripción</li><li> <i ></i>Programar campañas masivas</li><li> <i ></i>Gestión de contactos</li><li> <i ></i>Genera embudos de venta</li><li> <i ></i>ChatBot + WorkFlow + Menús</li><li> <i ></i>Crea Reglas Automatizadas</li> <li> <i ></i>Crea recordatorios recurrentes</li> <li> <i ></i>Agrega atributos personalizados CRM</li><li> <i ></i>Crea recordatorios y notas de trabajo</li><li><li> <i ></i>Crea respuestas rápidas</li><li> <i ></i>Genera Plantillas</li><li> <i ></i>Exporta e importa Backups</li> <li> <span class="masc">Soporte 24/7</span></li><li><span class="masc">Actualizaciones GRATIS</span></li><li><span class="masc">Capacitación Personalizada</span></li></div></div>',
            //   linkpago:'https://ppls.me/35BwTrLjdksk41BMRww08w',
            //   },

            //   'I4':{
            //     name:'Básico LifeTime',
            //     antes:899.98,
            //     price:629.99,
            //     qty:0,
            //     img:'img/imgproduc/crm-whatsapp-open-source.webp',
            //     detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i>1 cuenta CRM WhatsApp Lifetime</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li>  <li> <i ></i>Envía Imágenes y Videos con Descripción</li><li> <i ></i>Programar campañas masivas</li><li> <i ></i>Gestión de contactos</li><li> <i ></i>Genera embudos de venta</li><li> <i ></i>ChatBot + WorkFlow + Menús</li><li> <i ></i>Crea Reglas Automatizadas</li> <li> <i ></i>Crea recordatorios recurrentes</li> <li> <i ></i>Agrega atributos personalizados CRM</li><li> <i ></i>Crea recordatorios y notas de trabajo</li><li><li> <i ></i>Crea respuestas rápidas</li><li> <i ></i>Genera Plantillas</li><li> <i ></i>Exporta e importa Backups</li> <li> <span class="masc">Soporte 24/7</span></li><li><span class="masc">Actualizaciones GRATIS</span></li><li><span class="masc">Capacitación Personalizada</span></li></ul></div></div>',
            //     linkpago:'https://ppls.me/cRvDbDzKyzZZaHS9USl8Bg',
            //     },
            
  
        // 'I5':{
        //     name:'Franquiciado | White Label',
        //     antes:0.00,
        //     price:0.00,
        //     qty:0,
        //     img:'img/img/win/whitelabel-basica.webp',
        //     detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Crea tu negocio con tu propia marca</span></li><li><i></i> Plataforma Web-Ecommerce + Pasarela de pagos</li><li><i class="fas fa-stop-circle"></i> Generador de Credenciales</li><li><i ></i> Dominio y Hosting</li><li> <i></i>Actualizaciones (versiones BETA)</li><li><i ></i> Plantillas Publicitarias y artes para ADS y redes sociales con tu marca</li><li><i ></i> Capacitación, Asesoría y Soporte</li> <br><span class="masc">BONOS:</span> <li><i ></i>Chat Multiagente WEB</li> <li> <i></i>WhatsApp Ecommerce</li> </ul></div></div>',
        //     linkpago:'',
        //     },
      

       
        
      },
        /*NOMBRE CATEGORIA*/
        namec:'',
      },

      //   primera sección
      'C2':{
         items:{
          
            'I1':{
                name:'Multilicencia Semestral',
                antes:79.98,
                price:39.99,
                qty:0,
                img:'img/imgproduc/crm-whatsapp-facebook-instagram-gratis.webp',
      
                detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i>5 cuentas CRM WhatsApp Semestral</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li>  <li> <i ></i>Envía Imágenes y Videos con Descripción</li><li> <i ></i>Programar campañas masivas</li><li> <i ></i>Gestión de contactos</li><li> <i ></i>Genera embudos de venta</li><li> <i ></i>ChatBot + WorkFlow + Menús</li><li> <i ></i>Crea Reglas Automatizadas</li> <li> <i ></i>Crea recordatorios recurrentes</li> <li> <i ></i>Agrega atributos personalizados CRM</li><li> <i ></i>Crea recordatorios y notas de trabajo</li><li><li> <i ></i>Crea respuestas rápidas</li><li> <i ></i>Genera Plantillas</li><li> <i ></i>Exporta e importa Backups</li><li> <span class="masc">Soporte</span></li><li><span class="masc">Capacitación con Tutoriales</span></li></ul></div></div>',
                linkpago:'https://ppls.me/Hp1YnMnDv5LSJoZZ2KL7ow',
                },
    
             
            
            'I2':{
                name:'Multilicencia Anual',
                antes:479.98,
                price:239.99,
                qty:0,
                img:'img/imgproduc/crm-whatsapp-business.webp',
                detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i>5 cuentas CRM WhatsApp Anual</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li>  <li> <i ></i>Envía Imágenes y Videos con Descripción</li><li> <i ></i>Programar campañas masivas</li><li> <i ></i>Gestión de contactos</li><li> <i ></i>Genera embudos de venta</li><li> <i ></i>ChatBot + WorkFlow + Menús</li><li> <i ></i>Crea Reglas Automatizadas</li> <li> <i ></i>Crea recordatorios recurrentes</li> <li> <i ></i>Agrega atributos personalizados CRM</li><li> <i ></i>Crea recordatorios y notas de trabajo</li><li><li> <i ></i>Crea respuestas rápidas</li><li> <i ></i>Genera Plantillas</li><li> <i ></i>Exporta e importa Backups</li><li> <span class="masc">Soporte 24/7</span></li><li><span class="masc">Actualizaciones GRATIS</span></li><li><span class="masc">Capacitación Personalizada</span></li></ul></div></div>',
                linkpago:'https://ppls.me/n7wORryaNsejLVL1zvPuww',
                },
                
                // 'I3':{
                //   name:'PRO Business 24 meses+ 2 Meses GRATIS',
                //   antes:959.98,
                //   price:479.99,
                //   qty:0,
                //   img:'img/imgproduc/crm-que-es-y-para-que-sirve.webp',
                //   detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i>5 cuentas CRM WhatsApp 24 meses +2 Meses gratis</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li>  <li> <i ></i>Envía Imágenes y Videos con Descripción</li><li> <i ></i>Programar campañas masivas</li><li> <i ></i>Gestión de contactos</li><li> <i ></i>Genera embudos de venta</li><li> <i ></i>ChatBot + WorkFlow + Menús</li><li> <i ></i>Crea Reglas Automatizadas</li> <li> <i ></i>Crea recordatorios recurrentes</li> <li> <i ></i>Agrega atributos personalizados CRM</li><li> <i ></i>Crea recordatorios y notas de trabajo</li><li><li> <i ></i>Crea respuestas rápidas</li><li> <i ></i>Genera Plantillas</li><li> <i ></i>Exporta e importa Backups</li><li> <span class="masc">Soporte 24/7</span></li><li><span class="masc">Actualizaciones GRATIS</span></li><li><span class="masc">Capacitación Personalizada</span></li></ul></div></div>',
                //   linkpago:'https://ppls.me/nlWaiq83fSNghLUrF9G2XA',
                //   },

                //   'I4':{
                //     name:'PRO Business LifeTime',
                //     antes:1199.96,
                //     price:839.97,
                //     qty:0,
                //     img:'img/imgproduc/hubspot-crm-whatsapp.webp',
                //     detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i>5 cuentas CRM WhatsApp LifeTime</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li>  <li> <i ></i>Envía Imágenes y Videos con Descripción</li><li> <i ></i>Programar campañas masivas</li><li> <i ></i>Gestión de contactos</li><li> <i ></i>Genera embudos de venta</li><li> <i ></i>ChatBot + WorkFlow + Menús</li><li> <i ></i>Crea Reglas Automatizadas</li> <li> <i ></i>Crea recordatorios recurrentes</li> <li> <i ></i>Agrega atributos personalizados CRM</li><li> <i ></i>Crea recordatorios y notas de trabajo</li><li><li> <i ></i>Crea respuestas rápidas</li><li> <i ></i>Genera Plantillas</li><li> <i ></i>Exporta e importa Backups</li><li> <span class="masc">Soporte 24/7</span></li><li><span class="masc">Actualizaciones GRATIS</span></li><li><span class="masc">Capacitación Personalizada</span></li></ul></div></div>',
                //     linkpago:'https://ppls.me/hRPGvh5jUeaebN42DyIVw',
                //     },
                    
                  
      
            // 'I5':{
            //     name:'Franquiciado | White Label',
            //     antes:0.00,
            //     price:0.00,
            //     qty:0,
            //     img:'img/img/win/whitelabel-PRO.webp',
            //     detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Crea tu negocio con tu propia marca</span></li><li><i></i> Plataforma Web-Ecommerce + Pasarela de pagos</li><li><i class="fas fa-stop-circle"></i> Generador de Credenciales</li><li><i ></i> Dominio y Hosting</li><li> <i></i>Actualizaciones (versiones BETA)</li><li><i ></i> Plantillas Publicitarias y artes para ADS y redes sociales con tu marca</li><li><i ></i> Capacitación, Asesoría y Soporte</li> <br><span class="masc">BONOS:</span> <li><i ></i>Chat Multiagente WEB</li> <li> <i></i>WhatsApp Ecommerce</li> </ul></div></div>',
            //     linkpago:'',
            //     },
                
        },
        namec:'',
      },

    //   segunda sección

    'C3':{
      items:{
       
         'I1':{
             name:'Resellers',
             antes:399.98,
             price:199.99,
             qty:0,
             img:'img/imgproduc/whatsapp-multiagente-gratis.webp',
   
             detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li class="masc"><i ></i></li><li><i class="fas fa-stop-circle"></i></li><li><i ></i> Capacitación personalizada del negocio</li><li><i ></i> Comisiones 100%</li></ul></div></div>',
             linkpago:'https://payp.page.link/KciX',
             },
 
          
         
         'I2':{
             name:'Marca Blanca',
             antes:799.98,
             price:399.99,
             qty:0,
             img:'img/imgproduc/crm-whatsapp-barato.webp',
             detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li class="masc"><i ></i></li><li><i class="fas fa-stop-circle"></i> </li><li><i ></i> Capacitación personalizada del negocio</li><li><i ></i> Comisiones 100%</li><li class="masc"><i ></i> Software con tu marca propia, colores, logo, números de contacto, links de redes sociales.</li></ul></div></div>',
             linkpago:'https://payp.page.link/YYJ5',
             },

             

            //  'I3':{
            //   name:'Marca Blanca + Ecommerce',
            //   antes:1399.98,
            //   price:699.99,
            //   qty:0,
            //   img:'img/imgproduc/crm-whatsapp-multiagente.webp',
            //   detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li class="masc"><i ></i>Licencias Ilimitadas</li><li><i class="fas fa-stop-circle"></i> Demos Ilimitadas</li><li><i ></i> Capacitación personalizada del negocio</li><li><i ></i> Comisiones 100%</li><li><i ></i> Software con tu marca propia, colores, logo, números de contacto, links de redes sociales.</li><li class="masc"><i ></i> Plataforma Ecommerce + Dominio .COM</li></ul></div></div>',
            //   linkpago:'https://payp.page.link/hHMb',
            //   },

              // 'I4':{
              //   name:'Emprendedor Mac LifeTime',
              //   antes:599.98,
              //   price:299.99,
              //   qty:0,
              //   img:'img/img/macan/lifetime-basica.webp',
              //   detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i> Licencia de por vida</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i> Cuentas de WhatsApp ilimitadas</li><li><i ></i> Multidispositivos MAC</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación y Exportación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li> <li> <li> <i ></i>Extractor de Contactos</li> <li> <i ></i>Envia Imágenes y Videos con Descripción</li> <li>  <li> <i ></i>Compatible con Todas las Versiones de WhatsApp incluidas las Versiones BETA</li> <li> <li> <li> <span class="masc">Soporte 24/7</span></li><li><span class="masc">Actualizaciones GRATIS</span></li><li><span class="masc">Capacitación en Marketing Masivo</span></li><li></i>❌Genera Informes de Envíos Masivos.</li><li><li></i>❌Filtro de Números de WhatsApp</li><li><li></i>❌Generador de Números de WhastsApp</li><li><li></i>❌Envíos Masivos a Grupos y Etiquetados</li><li><li></i>❌ChatBot Autorespuestas Funnels</li><li><li></i>❌Contestar desde la App</li><li><li></i>❌Transferir a otro Dispositivo</li></ul></div></div>',
              //   linkpago:'https://ppls.me/cRvDbDzKyzZZaHS9USl8Bg',
              //   },
             
   
        //  'I5':{
        //      name:'Emprendedor Básico Mac White-Label ',
        //      antes:0.00,
        //      price:0.00,
        //      qty:0,
        //      img:'img/img/macan/whitelabel-basica.webp',
        //      detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Crea tu negocio con tu propia marca</span></li><li><i></i> Plataforma Web-Ecommerce + Pasarela de pagos</li><li><i class="fas fa-stop-circle"></i> Generador de Credenciales</li><li><i ></i> Dominio y Hosting</li><li> <i></i>Actualizaciones (versiones BETA)</li><li><i ></i> Plantillas Publicitarias y artes para ADS y redes sociales con tu marca</li><li><i ></i> Capacitación, Asesoría y Soporte</li> <br><span class="masc">BONOS:</span> <li><i ></i>Chat Multiagente WEB</li> <li> <i></i>WhatsApp Ecommerce</li> </ul></div></div>',
        //      linkpago:'',
        //      },
             
     },
     namec:'',
   },

//    'C4':{
//     items:{
     
//        'I1':{
//            name:'Emprendedor PRO Business',
//            antes:79.98,
//            price:39.99,
//            qty:0,
//            img:'img/img/macan/1-mes-pro.webp',
 
//            detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i> Licencia PRO Business 30 días</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i> Cuentas de WhatsApp ilimitadas</li><li><i ></i> Multidispositivos MAC</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación y Exportación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li> <li> <li> <i ></i>Extractor de Contactos</li> <li> <i ></i>Envia Imágenes y Videos con Descripción</li> <li>  <li> <i ></i>Compatible con Todas las Versiones de WhatsApp incluidas las Versiones BETA</li> <li> <li> <li> <span class="masc">Soporte 24/7</span></li><li><span class="masc">Actualizaciones GRATIS</span></li><li><span class="masc">Capacitación en Marketing Masivo</span></li><li></i>✅Genera Informes de Envíos Masivos.</li></li><li></i>✅Filtro de Números de WhatsApp</li><li><li></i>✅Entrenador de Números de WhastsApp</li><li><li></i>✅Envíos Masivos a Grupos y Etiquetados</li><li><li></i>✅ChatBot Autorespuestas Funnels</li><li><li></i>✅Transferir a otro Dispositivo</li></ul></div></div>',
//            linkpago:'https://ppls.me/Hp1YnMnDv5LSJoZZ2KL7ow',
//            },

        
       
//        'I2':{
//            name:'Emprendedor PRO Business Mac 12 Meses',
//            antes:479.98,
//            price:239.99,
//            qty:0,
//            img:'img/img/macan/12-meses-pro.webp',
//            detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i> Licencia PRO Business 12 meses</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i> Cuentas de WhatsApp ilimitadas</li><li><i ></i> Multidispositivos MAC</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación y Exportación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li> <li> <li> <i ></i>Extractor de Contactos</li> <li> <i ></i>Envia Imágenes y Videos con Descripción</li> <li>  <li> <i ></i>Compatible con Todas las Versiones de WhatsApp incluidas las Versiones BETA</li> <li> <li> <li> <span class="masc">Soporte 24/7</span></li><li><span class="masc">Actualizaciones GRATIS</span></li><li><span class="masc">Capacitación en Marketing Masivo</span></li><li></i>✅Genera Informes de Envíos Masivos.</li></li><li></i>✅Filtro de Números de WhatsApp</li><li><li></i>✅Entrenador de Números de WhastsApp</li><li><li></i>✅Envíos Masivos a Grupos y Etiquetados</li><li><li></i>✅ChatBot Autorespuestas Funnels</li><li><li></i>✅Transferir a otro Dispositivo</li></ul></div></div>',
//            linkpago:'https://ppls.me/n7wORryaNsejLVL1zvPuww',
//            },

//            'I3':{
//             name:'Emprendedor PRO Business Mac 24 Meses + 2 Meses GRATIS',
//             antes:959.98,
//             price:479.99,
//             qty:0,
//             img:'img/img/macan/24-meses-pro.webp',
//             detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i> Licencia PRO Business 24 meses + 2 meses gratis.</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i> Cuentas de WhatsApp ilimitadas</li><li><i ></i> Multidispositivos MAC</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación y Exportación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li> <li> <li> <i ></i>Extractor de Contactos</li> <li> <i ></i>Envia Imágenes y Videos con Descripción</li> <li>  <li> <i ></i>Compatible con Todas las Versiones de WhatsApp incluidas las Versiones BETA</li> <li> <li> <li> <span class="masc">Soporte 24/7</span></li><li><span class="masc">Actualizaciones GRATIS</span></li><li><span class="masc">Capacitación en Marketing Masivo</span></li><li></i>✅Genera Informes de Envíos Masivos.</li></li><li></i>✅Filtro de Números de WhatsApp</li><li><li></i>✅Entrenador de Números de WhastsApp</li><li><li></i>✅Envíos Masivos a Grupos y Etiquetados</li><li><li></i>✅ChatBot Autorespuestas Funnels</li><li><li></i>✅Transferir a otro Dispositivo</li></ul></div></div>',
//             linkpago:'https://ppls.me/nlWaiq83fSNghLUrF9G2XA',
//             },

//             'I4':{
//               name:'Emprendedor PRO Business Mac LifeTime',
//               antes:1199.98,
//               price:599.99,
//               qty:0,
//               img:'img/img/macan/lifetime-pro.webp',
//               detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Instalación GRATIS</span></li><li><i></i> Licencia PRO Business de por vida</li><li><i class="fas fa-stop-circle"></i> Mensajes y Campañas Ilimitadas</li><li><i ></i> Mensajes 100% Personalizados</li><li><i ></i> Cuentas de WhatsApp ilimitadas</li><li><i ></i> Multidispositivos MAC</li><li><i ></i>Adjunta Video, Imagen, Audio, Catálogos, Documentos</li> <li> <i></i>Importación y Exportación de Contactos.</li> <li> <i></i>Sistema Anti-Algoritmo de Bloqueo</li> <li> <li> <i ></i>Extractor de Contactos</li> <li> <i ></i>Envia Imágenes y Videos con Descripción</li> <li>  <li> <i ></i>Compatible con Todas las Versiones de WhatsApp incluidas las Versiones BETA</li> <li> <li> <li> <span class="masc">Soporte 24/7</span></li><li><span class="masc">Actualizaciones GRATIS</span></li><li><span class="masc">Capacitación en Marketing Masivo</span></li><li></i>✅Genera Informes de Envíos Masivos.</li></li><li></i>✅Filtro de Números de WhatsApp</li><li><li></i>✅Entrenador de Números de WhastsApp</li><li><li></i>✅Envíos Masivos a Grupos y Etiquetados</li><li><li></i>✅ChatBot Autorespuestas Funnels</li><li><li></i>✅Transferir a otro Dispositivo</li></ul></div></div>',
//               linkpago:'https://ppls.me/hRPGvh5jUeaebN42DyIVw',
//               },
           
 
//        'I5':{
//            name:'Franquiciado | White Label',
//            antes:0.00,
//            price:0.00,
//            qty:0,
//            img:'img/img/macan/whitelabel-pro.webp',
//            detalles:'<div class="contenedor-preguntas activo"><div class="contenedor-pregunta"><p class="pregunta">Ver Detalles<span class="icon-negocio ty"></span></p><ul class="features"><li><i></i> <span class="masc">Crea tu negocio con tu propia marca</span></li><li><i></i> Plataforma Web-Ecommerce + Pasarela de pagos</li><li><i class="fas fa-stop-circle"></i> Generador de Credenciales</li><li><i ></i> Dominio y Hosting</li><li> <i></i>Actualizaciones (versiones BETA)</li><li><i ></i> Plantillas Publicitarias y artes para ADS y redes sociales con tu marca</li><li><i ></i> Capacitación, Asesoría y Soporte</li> <br><span class="masc">BONOS:</span> <li><i ></i>Chat Multiagente WEB</li> <li> <i></i>WhatsApp Ecommerce</li> </ul></div></div>',
//            linkpago:'',
//            },
           
//    },
//    namec:'',
//  },


      // 'C3':{
      //   items:{
         
      //     'I1':{
      //       //NOMBRE DEL ITEM
      //       name:'CAMILLA FACIAL Y CORPORAL MÁS TABURETE',
      //       //PRECIO BASE DEL ITEM
      //       price:275.00,
      //       //CANTIDAD ESCOGIDA DEL ITEM
      //       qty:0,
      //       //FUENTE DE LA IMAGEN
      //       img:'mobiliario1.jpg',
      //       },
      //       'I2':{
      //       name:'CAMILLA FACIAL Y CORPORAL',
      //       price:350.00,
      //       qty:0,
      //       img:'mobiliario2.jpg',
      //       },
      //       'I3':{
      //       name:'MESA 3 NIVELES BLANCA CON CAJÓN',
      //       price:80.00,
      //       qty:0,
      //       img:'mobiliario3.jpg',
      //       },
      //       'I4':{
      //       name:'MESA DE 2 NIVELES CON CAJÓN',
      //       price:120.00,
      //       qty:0,
      //       img:'mobiliario4.jpg',
      //       },
      //   },
      //   namec:'Mobiliario',
      // }
    },
    // items:{
    // 'I1':{
    //   //NOMBRE DEL ITEM
    //   name:'Papas Fritas',
    //   //PRECIO BASE DEL ITEM
    //   price:1.99,
    //   //CANTIDAD ESCOGIDA DEL ITEM
    //   qty:0,
    //   //FUENTE DE LA IMAGEN
    //   img:'papas.png',
    // },
    // 'I2':{
    //   name:'Hamburguesa',
    //   price:2.99,
    //   qty:0,
    //   img:'hamburguesa.png',
    // },
    // 'I3':{
    //   name:'Pizza',
    //   price:1.99,
    //   qty:0,
    //   img:'pizza.png',
    // },
    // 'I4':{
    //   name:'Alitas BBQ',
    //   price:5.99,
    //   qty:0,
    //   img:'alitas.png',
    //   },
    // },
    //DATOS A CONTROLAR DEL USUARIO
    user_data:{
      user_name:{
        //VALOR ACTUAL EN EL CAMPO
        value:'',
        //ERROR A DESPLEGAR EN CASO DE NO RELLENAR CAMPO
        error:'',
      },
      user_phone:{
        value:'',
        error:'',
      },
      user_dir:{
        value:'',
        error:'',
      },
      user_zone:{
        value:'',
        error:'',
      },
      user_mail:{
        value:'',
        error:'',
      }
    }
  };
  //CONTROLADORES DEL DIALOGO/MODAL
  var dialog = document.getElementById('myFirstDialog');    
  /*document.getElementById('show').onclick = function() {    
      //MOSTRAR DIALOGO
      dialog.show();    
  };*/    
  /*  document.getElementById('hide').onclick = function() {    
        //OCULTAR DIALOGO
        dialog.close();    
  };*/
  let menu_sections = '';    
  const categories = document.getElementById('menu-sections');
  Object.entries(pedido_store.categories).forEach(([key,item],ind) => {
    menu_sections = menu_sections + `<div class="section-item"><a href="#${key}a">${item.namec}</a></div>`;
  });
  categories.innerHTML = menu_sections;
  
  /*
  PARA LOS METODOS DE ALTERACION DE CANTIDAD ELEGIDA DE UNO U OTRO ITEM
  USAREMOS EL ID DE LA CATEGORIA Y EL ID DEL ITEM SELECCIONADO PARA CONTROLAR LAS CANTIDADES
  */
  const newCancel = (target,catg_id) => {
    //SE ELIMINAN LA CANTIDAD ASIGNADA A UN ITEM OBJETIVO (SE VUELVE 0)
    pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty']=0;
    console.log(pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty']);
    document.getElementById(`${catg_id}-${target}-qty`).value = pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty'];
    addItemToShoppingCart();
  }
  
  const newPlus = (target,catg_id) => {
    //SE LE SUMA 1 A LA CANTIDAD DEL ITEM OBJETIVO
    pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty']++;
    document.getElementById(`${catg_id}-${target}-qty`).value =  pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty'];
    addItemToShoppingCart();
  }
  
  const newMinus = (target,catg_id) => {
    //SE LE RESTA 1 A LA CANTIDAD DEL ITEM OBJETIVO MIENTRAS EL RESULTADO SEA MAYOR O IGUAL A 0
    //ASI SE DEBEN EVITAR CANTIDADES NEGATIVAS
    if( pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty']-1 >= 0){
    pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty']--;
    document.getElementById(`${catg_id}-${target}-qty`).value =  pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty'];
    addItemToShoppingCart();
    }
  }
  /*CON ESTA FUNCION GENERAMOS EL CONTROLADOR GRAFICO DE CADA ITEM
  EN FUNCION DE CUANTOS ITEMS TENGAMOS EN NUESTRA VARIABLE GLOBAL*/
  const ItemCreator = (itemList,catg_id) => {
  
    let IM = ``;
  
    Object.entries(itemList).forEach(([key,item],ind) => {
      IM = IM + 
      `<div class="item-card">
  
        <div class="item shadow mb-4">
          
          <div class="modal-container">
     
           <img class="item-image" src="${item.img}">
          </div>
          <div class="containerpro">
          <h4 class="item-price"><del>$${item.antes.toFixed(2)}</del></h4>
          <h4 class="item-price">$${item.price}</h4>
          <h3 class="item-title" id="">${item.name}</h3>
          <div class="item-details">
          <p class="item-price">${item.detalles}</p>
          <p class="item-price fanlink" id="linkpago">${item.linkpago}</p>

         
            
            <div class="item_cantidadg">
            <div class="item_cantidadt">
              <button id="${catg_id}-${key}-m" class="minus" ></button>
              <input class="quantity item_cantidad " type="number" name="" min="0" value=${item.qty}  id="${catg_id}-${key}-qty">
              <button id="${catg_id}-${key}-p" class="plus"></button>
            </div>    
            </div>                     
          </div>
          </div>
        </div>
      </div>`;
    });
  
    return IM;
  }
  //RECORREMOS CADA CATEGORIA
  Object.entries(pedido_store.categories).forEach(([key,item],ind) => {
    //GENERAMOS UN MENU CONTENEDOR POR CATEGORIA
    let container = document.createElement("section");
    container.id = `menu-container-${key}`;
    container.classList.add("item-menu");
  
    container.innerHTML = `<p class="pcategory" id=${key+"a"}>${item.namec}</p>`;//new added
  
  
   
    //GENERAMOS EL CONTENEDOR DE LOS PRODUCTOS DE LA CATEGORIA
    let menu_sec = document.createElement("div");
    menu_sec.id=key;
    menu_sec.classList.add("row");
    menu_sec.classList.add("owl-carousel");
    //GENERAMOS NUESTROS PRODUCTOS
    let menu_sec_items = ItemCreator(item.items,key);
    //ASIGNAMOS ETIQUETAS AL DIV OBJETIVO 
    menu_sec.innerHTML = menu_sec_items;
    //INSERTAMOS EN EL CONTENEDOR POR CATEGORIA LOS PRODUCTOS GENERADOS
    container.appendChild(menu_sec);
    //INSERTAMOS EN EL SLIDER NUESTRO CONTENEDOR DE LA CATEGORIA
    document.getElementById('slides-container').appendChild(container);
  });
  
  Object.entries(pedido_store.categories).forEach(([key,item],ind) => {
    Object.entries(item.items).forEach(([_key,_item],_ind)=> {
      document.getElementById(`${key}-${_key}-m`).addEventListener("click",() => {
        newMinus(_key,key);
      });
      document.getElementById(`${key}-${_key}-p`).addEventListener("click",() => {
        newPlus(_key,key);
      });
    });
  });
  
  Object.entries(pedido_store.user_data).forEach(([key,item],ind) => {
    document.getElementById(`${key}`).addEventListener("change",(ev) => {
      pedido_store.user_data[`${key}`] = ev.target.value;
    });
  });
  //CONTROLADOR DE EVENTO EN CASO DE SUBMIT
  
  // document.getElementById(`gform`).addEventListener("submit",(ev) => {
  //     ev.preventDefault();
  //     let errors ='';
  //     //RECORREMOS CADA VALOR DEL OBJETO CONTROLADOR DE LA DATA DEL FORMULARIO
  //     Object.entries(pedido_store.user_data).forEach(([key,item],ind) => {
  //       //SI EL CAMPO PRESENTA VALOR '' Y EL MISMO TIENE UN ERROR A MOSTRAR
  //       //CARGAREMOS EN NUESTRO MODAL/DIALOGO EL MENSAJE DE ERROR DE DICHO CAMPO
  //       if( (item.value === '' || item.value==="*") && item.error !== ''){
  //        errors += `<h4>${item.error}</h4>`;
  //       }
  //     });
  //     if(errors !== ''){
  //       document.getElementById(`order-msg`).innerHTML = errors;
       
  //       //dialog.show();
  //       $(".orderDialog").fadeIn(1000);
  //       setTimeout(function() {
  //         $(".orderDialog").fadeOut(1000);
  //         //dialog.close();
  //       },2000);
  //     }
  // });
  
  
  
   
  const comprarButton = document.querySelector('.comprarButton');
  comprarButton.addEventListener('click', comprarButtonClicked);
  
  const shoppingCartItemsContainer = document.querySelector(
    '.shoppingCartItemsContainer'
   
  );
  
  
  /*
  function addToCartClicked(event) {
  
    const button = event.target;
    const item = button.closest('.item');
    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-image').src;
    const itemCantidad = item.querySelector('.item_cantidad').value;
    const itemtotal = item.querySelector('.item_total');
  
    //addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemCantidad, itemtotal);
  }
  */
  
  //FUNCION PARA GENERAR LOS ITEMS QUE SE ESTEN SOLICITANDO EN EL CARRITO
  //SI Y SOLO SI ESTOS TIENEN UNA CANTIDAD SOLICITADA MAYOR A 0
  const ItemCheckout = (itemList) => {
    let productoslist="";
    let productoslist2="";
    let productocategory="";
    let cart_content = '';
    let linkoculf="";
    let imgname="";

    var linkoculsend=document.getElementById('fantasmasend');
    var imgnamesend=document.getElementById('fantasmaimgnamef');

    var productoslistcategorya=document.getElementById('fantasma');
    var productoslistcategorya2=document.getElementById('entry.1625517509');
    var pushlistadeproducots=document.querySelector('.pedidocli');
  
    Object.entries(itemList).forEach(([key,_item],_ind) =>{
      let cart_catg = '';
      Object.entries(_item.items).forEach(([_key,item],ind) => {
        if(cart_catg === '' && item.qty > 0){
          cart_catg = `<h4>${_item.namec}</h4>`;
          cart_content = cart_content + cart_catg;
          
        }
      });
  
      Object.entries(_item.items).forEach(([_key,item],ind) => {
      if(item.qty > 0){
      cart_content = cart_content + 
      `<div class=" shoppingCartItem">
        <span>
            <div class="shopping-cart-item" >
                <img class="imgpedido" src=${item.img} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0  " id="itemtitulowa">${item.name}</h6>
            </div>
        </span>
        <span>
        <p class="item-price mb-0 shoppingCartItemPrice itempricewa" >$${item.price}</p>
        </span>
        <div class="item_cantidadt">
          <button id="${key}-${_key}-m-s" class="minus" ></button>
          <input class="quantity item_cantidad " type="number" name="" min="0" value=${item.qty}  id="${key}-${_key}-qty">
          <button id="${key}-${_key}-p-s" class="plus"></button>
        </div>
        <span class="xcerrar">
          <p class="item-total mb-0 shoppingCartItemTotal itemtotal" >$${Number.parseFloat(item.qty*item.price).toFixed(2)}</p>
  
          <button class="btn btn-danger buttonDelete" type="button" id="${key}-${_key}-c"><span class="icon-bin"></span> </button>
        
        
        </span>

        <span class="linkocul">
        <p class="linkoculp" >$${item.linkpago}</p>

       
      
      </span>
      </div>

     
      
  
      
      `

      imgname += `<div class="imgsend" >
      <img class="imgsendf" src=${item.img}>
      <h6 class="titulesend" id="">${item.name}</h6>
  </div>`;

      linkoculf +=item.name+"%20"+item.linkpago+"%20"+"%0A";
  
      productoslist += item.qty+"%20"+"*x*"+"%20"+"*|*"+"%20"+item.name+"%20"+"%0A";
        
      productoslist2 += item.qty+" "+"x"+" "+"|"+" "+item.name+"\n";
      
  
        }
      });
    });

    imgnamesend.innerHTML=`${imgname}`;
    linkoculsend.innerHTML=`${linkoculf}`;
    productoslistcategorya.innerHTML=`${productoslist}`;
    productoslistcategorya2.innerHTML=`${productoslist2}`;
    return cart_content;
  }


//   var imgnamef=document.getElementById('fantasmaimgname').innerHTML=('.fantasmaimgnamef');



// $(`${key}-${_key}-p`).on('click', function(){
 


// })

// $(`${key}-${_key}-p`).style="border: 1px solid #e0e0e0;margin: 10px;width: 100%;z-index: 4;outline: none;-webkit-appearance: none;background-color: transparent;border: none;align-items: center;justify-content: center;width: 2rem;height: 2rem;cursor: pointer;margin: 0;position: relative;";


// document.getElementById("whaterror").style=" color: #25d366; position: relative; padding: 15px;  margin: 0 26px 20px; border-radius: 15px; background-color: #fff; color: #4a4a4a; box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%); transition: 0.5s ease-in-out;"

// $('.eti1').on('click', function(){
//   $('.datos1').addClass('show btnpagos');
 
//   $('.datos2').removeClass('show btnpagos');
//   $('.datos3').removeClass('show btnpagos');
//   $('.datos4').removeClass('show btnpagos');

// })
  
  function addItemToShoppingCart(/*itemTitle, itemPrice, itemImage, itemCantidad, itemtotal*/) {
  
    document.getElementById('cart_list').innerHTML = ItemCheckout(pedido_store.categories);
    let cart_amt =0;
    Object.entries(pedido_store.categories).forEach(([key,item],ind) =>{
      Object.entries(item.items).forEach(([_key,_item],_ind) => {
      if(_item.qty > 0){
        document.getElementById(`${key}-${_key}-m-s`).addEventListener("click",() => {
          newMinus(_key,key);
        });
        document.getElementById(`${key}-${_key}-p-s`).addEventListener("click",() => {
          newPlus(_key,key);
        });
        document.getElementById(`${key}-${_key}-c`).addEventListener("click",() => {
          newCancel(_key,key);
        });
        cart_amt += _item.qty;
      }
      });
    });
     if(cart_amt > 0){
      document.getElementById('cart_amt').innerHTML = `${cart_amt}`;
      setTimeout(function() {
      $(".unowhat").fadeIn(1000);
      },500);
     }
     else{
      setTimeout(function() {
      $(".unowhat").fadeOut(1000);
      },500);
  }
   
    updateShoppingCartTotal(pedido_store.categories);
  }
  
  
  
  
  
    function ertd(){
  
    var leteryu = document
      .getElementById('cardnegocioid')
      .innerHTML =  shoppingCartItemsContainer.childElementCount;
  
    }
  
  
    
  
  function updateShoppingCartTotal(itemList) {
  
    let cartTotal = 0;
    Object.entries(itemList).forEach(([key,item],ind) => {
      //cartTotal += item.price*item.qty;
      Object.entries(item.items).forEach(([_key,_item],_ind)=> {
        cartTotal += _item.price*_item.qty;
      });
    });
  
    
    document.querySelector('.shoppingCartTotal').innerHTML=`$${Number.parseFloat(cartTotal).toFixed(2)}`;
  
  
    
    let cartTotal3 = cartTotal;
  
  
    var qqq=document.querySelector('.shoppingCartTotal2').innerHTML=`$${cartTotal3.toFixed(2)}`;
    // console.log("updateShoppingCartTotal -> qqq", qqq)
  
    
    var qwey=qqq;
  
    document.getElementById('entry.985986529').innerHTML=qwey;
  
  
  
    document.querySelector('.shoppingCartcambio').innerHTML=`$${cartTotal3.toFixed(2)}`;
  
  
    let cartTotal4 = cartTotal;
  
  
    var selectoptionq=document.getElementById('entry.686290451');
    
    
    selectoptionq.addEventListener('change', function(){
      
      var recepoptionq=selectoptionq.value;
    
       document.querySelector('.deliverysub2').innerHTML=`$${Number(recepoptionq).toFixed(2)}`;
    
      cartTotal4=cartTotal + Number(recepoptionq);
  
  
    document.querySelector('.shoppingCartcambio').innerHTML=`$${cartTotal4.toFixed(2)}`;
    
    });  // bubtotal ,bubtotal 2 y cambio 
  
  
  
  
  
  
  
    var def=document.querySelector('.monto');
  
    def.addEventListener('keyup', function(){
  
      var recepoptionc=def.value;
  
       document.querySelector('.monto').innerHTML=`$${Number(recepoptionc).toFixed(2)}`;
  
       var wert=document.getElementById('totalwa3').textContent;
  
       var total4a= Number(wert.replace('$',''));
  
    var  cartTotal4a= recepoptionc - total4a ;
  
    // var totalfp = Number(
    //   totalf.replace('$', ''));
    
      document.getElementById('entry.580204725').innerHTML=`$${cartTotal4a.toFixed(2)}`;
  
    
      if(recepoptionc===''){
  
        document.getElementById('entry.580204725').innerHTML=`$0,00`;
      }
  });
  
  
  
  
  
  // 
  
  let cartTotal2 = cartTotal;
  
  
  var selectoption=document.getElementById('entry.686290451');
  
  
  selectoption.addEventListener('change', function(){
    
    var recepoption=selectoption.value;
  
   
  
  
     document.querySelector('.deliverysub').innerHTML=`$${Number(recepoption).toFixed(2)}`;
  
    
  
  
  
    cartTotal2=cartTotal + Number(recepoption);
  
  
  
  
  
    var quitardelivery = document.querySelector(".deliveryoper");
  
    
   
    
    quitardelivery.onclick = function(){
  
        document.querySelector('.deliverysub2').innerHTML=`$${Number(0).toFixed(2)}`;
  
        cartTotal2=cartTotal+ Number(0);
    
        document.querySelector('.shoppingCartcambio').innerHTML=`$${cartTotal2.toFixed(2)}`;
  
   
  
      
  
        document.querySelector('.deliverysub').innerHTML=`$${Number(0).toFixed(2)}`;
  
        cartTotal2=cartTotal+ Number(0);
  
       
  
      document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;
  
      
    }
    
    var eee=document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;
  
  
  
    var qxx=eee;
      
    document.getElementById('entry.802449909').innerHTML=qxx;
  
  
  });
  
  
  var eee=document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;
  
  
  
  var qxx=eee;
    
  document.getElementById('entry.802449909').innerHTML=qxx;
  
  // 
  
  
  
  // 
  
  var quitardelivery2 = document.querySelector(".deliveryoperr");
  
  
  
  quitardelivery2.onclick = function(){
  
    document.querySelector('.deliverysub2').innerHTML=`$${Number(0).toFixed(2)}`;
  
    cartTotal2=cartTotal+ Number(0);
  
  
    document.querySelector('.shoppingCartcambio').innerHTML=`$${cartTotal2.toFixed(2)}`;
  
    
  
    document.querySelector('.deliverysub').innerHTML=`$${Number(0).toFixed(2)}`;
  
    cartTotal2=cartTotal+ Number(0);
  
   
  
    
  
    var eee=document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;

  
  
  }

  var eee=document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;

  
///////

// var quitardelivery = document.querySelector(".deliveryoper");
  
    
   
    
    // quitardelivery.onclick = function(){
  
    //     document.querySelector('.deliverysub2').innerHTML=`$${Number(0).toFixed(2)}`;
  
    //     cartTotal2=cartTotal+ Number(0);
    
    //     document.querySelector('.shoppingCartcambio').innerHTML=`$${cartTotal2.toFixed(2)}`;

        ///

    // var cartTotalpqy=cartTotal;

    // console.log("🚀 ~ file: precios2022.js:2073 ~ impiarformaspl ~ cartTotalpqy:", cartTotalpqy)

  //   var reservad = document.getElementsByName('entry.398428276');
      
      
  // for (var i = 0, length = reservad.length; i < length; i++) {
  
  //   if (reservad[i].checked===true) {

  var cartTotalpqy=cartTotal;

  var clickpaypal = document.getElementById('entry.1179942020');

clickpaypal.onclick = clickbotonpaypal;

function clickbotonpaypal() {
  if (clickpaypal.checked === true) {


   var paycomic =cartTotalpqy;

    var puebras=(parseFloat(paycomic) *0.054+0.30).toFixed(2);

    var impres=document.querySelector('.feepaypal').innerHTML=`${Number (puebras).toFixed(2)}`;

    var sumafees= (parseFloat(puebras))+(parseFloat(paycomic));

    var totalpayfess=document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${parseFloat (sumafees).toFixed(2)}`;

    var chaofantasma=document.getElementById('fantasmasend').textContent='';
   
    var comicpay = document.querySelector('.comicpay');
comicpay.style.display = 'block';



    
  }
}

  //pepudo
  

  
    

  

  
  
    

  
  }
  
  
  
  
  
  function removeShoppingCartItem(event) {
    /*const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();*/
    updateShoppingCartTotal(pedido_store.categories);
   
  }
  
  function quantityChanged(event) {
    /*const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;*/
    updateShoppingCartTotal(pedido_store.categories); 
  }
  
  
  
  function comprarButtonClicked() {
    shoppingCartItemsContainer.innerHTML = '';
    updateShoppingCartTotal();
   
  
  }
  
  
  
  
  $(".ordernumber").val(function(){
    return document.getElementById('intro').innerHTML=Math.floor(Math.random() * 999) + 1000
  
  })
  
  
 
  
  
  function goToPagep(){
    
  
    var orden = document.querySelector('.ordernumber').value;  
  
    // var email = document.getElementById('entry.1156212193').value;
    // var whatsapp = document.getElementById('entry.1632691641').value;
  
    // var delivery = document.getElementById('entry.686290451').value;
  
    // var direccion = document.getElementById('entry.150273747').value;
    
    // var nombre = document.getElementById('entry.2030044025').value;
  
    var totalf = document.querySelector('.shoppingCartTotaldelivery').textContent;
  
  
    var data1 = document.getElementsByName('entry.2030044025');
  
  
    for (var i = 0, length = data1.length; i < length; i++) {
      if (data1[i]) {
     
        var nombre = (data1[i].value+"%0A");
    
     
    
      }
    
      if (nombre=== undefined) {
        nombre = '';
        
    
    }
  
    if (nombre=== "%0A") {
      nombre = '';
      
  
  }
    }
  
    var data2 = document.getElementsByName('entry.1156212193');
  
  
    for (var i = 0, length = data2.length; i < length; i++) {
      if (data2[i]) {
     
        var email = (data2[i].value+"%0A");
    
     
    
      }
    
      if (email=== undefined) {
        email = '';
        
    
    }
  
    if (email=== "%0A") {
      email = '';
      
  
  }
    }
  
    var data3 = document.getElementsByName('entry.1632691641');
  
  
    for (var i = 0, length = data3.length; i < length; i++) {
      if (data3[i]) {
     
        var whatsapp = (data3[i].value+"%0A");
    
     
    
      }
    
      if (whatsapp=== undefined) {
        whatsapp = '';
        
    
    }
  
    if (whatsapp=== "%0A") {
      whatsapp = '';
      
  
  }
    }
  
  
    var data4 = document.getElementsByName('entry.686290451');
  
  
    for (var i = 0, length = data4.length; i < length; i++) {
      if (data4[i]) {
     
        var delivery = (data4[i].value);
    
     
    
      }
    
      if (delivery=== undefined) {
        delivery = '';
        
    
    }
  
    if (delivery=== "%0A") {
      delivery = '';
      
  
  }
  
  
    }
  
  
  //   var data5 = document.getElementsByName('entry.803987817');
  
  
  //   for (var i = 0, length = data5.length; i < length; i++) {
  //     if (data5[i]) {
     
  //       var direccion = ("*Dirección:*"+"%20"+data5[i].value+"%0A");
    
     
    
  //     }
    
  //     if (direccion=== undefined) {
  //       direccion = '';
        
    
  //   }
  
  //   if (direccion=== "%0A") {
  //     direccion = '';
      
  
  // }
  
  
  //   }
  
  
  
    var totalfp = Number(
      totalf.replace('$', '')
    );
    
    // if(  totalfp <= 10|| /^\s+$/.test(totalfp) )  {
    //   return (document.getElementById("demo").innerHTML =
    //   "Tu pedido mínimo debe ser de $10.00")
  
    
  //     document.getElementById("demo").innerHTML =
  //      "Aún no haz selecionado prodcutos"
  
  //         $('.demo').addClass('showmsg');
  
  
  //         setTimeout(function() {
  //           $(".showmsg").fadeOut(1500);
  //           },500);
          
    
  // }
  
  
  var dia = document.getElementById('entry.1164560529').value;
    
  var hora = document.getElementById('entry.404593967').value;
  
  
  
    
  var reservad = document.getElementsByName('entry.1067299390');
      
      
  for (var i = 0, length = reservad.length; i < length; i++) {
    if (reservad[i].checked===true) {
  
  
  
        var geolocal="%0A"+document.getElementById('entry.1441018699').textContent;
  
  
      var direccion = document.getElementById('entry.803987817').value;
      //docs.google.com/forms/d/e/1FAIpQLSclWHdimbOn2b18CPRaSz5RVoeLA-pxJudums5VtjnYhuVSRg/viewform?usp=pp_url&entry.1441018699=geolocalizacion&entry.2092178738=direccionmaps
     
  
      var dmap="%0A"+document.querySelector(".address").textContent;
  
      var opcionlocal = ("Opción de entrega"+"%0A"+reservad[i].value+"%20"+direccion+dmap+geolocal);
      // return  (document.getElementById("").innerHTML =
      //   "Ingresa tu número de cédula");
  
      // if(geolocal==="%0A                            "){
      //   geolocal = '';
  
      // }
      // if(dmap="%0A                            "){
      //   dmap = '';
  
      // }
  
      // if(direccion="%0A                            "){
      //   direccion = '';
  
      // }
    
    }
  
    if ( opcionlocal=== undefined) {
      opcionlocal = '';
    
  }
  
  if (opcionlocal=== "%0A") {
    opcionlocal = '';
    
  }
  
  }
  
  
  var reservad = document.getElementsByName('entry.398428276');
      
      
  for (var i = 0, length = reservad.length; i < length; i++) {
    if (reservad[i].checked===true) {
  
      var dia = document.getElementById('entry.1164560529').value;
    
  var hora = document.getElementById('entry.404593967').value;
  
  
      var opcionlocal = ("Opción de entrega"+"%0A"+reservad[i].value+"%0A" +dia+"%20"+hora);
      // return  (document.getElementById("").innerHTML =
      //   "Ingresa tu número de cédula");
    
    }
  
    if ( opcionlocal=== undefined) {
      opcionlocal = '';
    
  }
  
  if (opcionlocal==="%0A") {
    opcionlocal = '';
    
  }
  
  }
  
  
  var reservad = document.getElementsByName('entry.1612018657');
      
      
  for (var i = 0, length = reservad.length; i < length; i++) {
    if (reservad[i].checked===true) {
  
      
  
  
      var opcionlocal = ("Opción de entrega"+"%0A"+reservad[i].value);
      // return  (document.getElementById("").innerHTML =
      //   "Ingresa tu número de cédula");
    
    }
  
    if ( opcionlocal=== undefined) {
      opcionlocal = '';
    
  }
  
  if (opcionlocal==="%0A") {
    opcionlocal = '';
    
  }
  
  }
  
  
  
  
  
  
  
  
  
  var radios = document.getElementsByName('entry.696366128');
  
  
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
   
      var retornapagos ="Asunto* %20"+ (radios[i].value);
  
   
  
    }
  
    if (retornapagos=== undefined) {
      retornapagos = '';
      
  
  }
  
  
  if (retornapagos=== "%0A") {
    retornapagos = '';
    
  
  }
  }
  
  var radios = document.getElementsByName('entry.1405646315');
  
  
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
   
      var retornapagos ="*Asunto* %20"+ (radios[i].value);
  
      var cambio= document.getElementById('entry.580204725').textContent;
  
    }
  
    if (retornapagos=== undefined) {
      retornapagos = '';
      
  
  }
  
  if (cambio=== undefined) {
    cambio = '';
    
  
  }
  
  
  if (cambio=== "%0A") {
    cambio = '';
    
  
  }
  
  
  
  
  
  if (retornapagos=== "%0A") {
    retornapagos = '';
    
  
  }
  }
  
  var radios = document.getElementsByName('entry.1179942020');


  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
   
      var retornapagos ="*Asunto:* %20"+ (radios[i].value)+"%0A";

//pepon


   
     
  
    }
  
    if (retornapagos=== undefined) {
      retornapagos = '';
      
  
  }
  
  if (retornapagos=== "%0A") {
    retornapagos = '';
    
  
  }
  }
  
  var radios = document.getElementsByName('entry.2095367105');
  
  
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
   
      var retornapagos ="*Asunto:* %20"+ (radios[i].value);
  
   
  
    }
  
    if (retornapagos=== undefined) {
      retornapagos = '';
      
  
  }
  
  if (retornapagos=== "%0A") {
    retornapagos = '';
    
  
  }
  }
  
  
  // cedula para facturar
  // var facturafc = document.getElementsByClassName('facf');
  
  
  // $('div.myClass');
  
  // $('.eti4').on('click', function(){
  //   $('.datos4').addClass('show btnpagos');
  //   $('.datos1').removeClass('show btnpagos');
  //   $('.datos2').removeClass('show btnpagos');
  //   $('.datos3').removeClass('show btnpagos');
  // })
  
  // var wert="";
  
  // var wsd=document.getElementById('entry.709227128');
  
  
   
  //     if (document.getElementById("entry.709227128").checked = true) {
     
  //       var retornafc = wsd.value;
    
    
  //     }
    
  //     if (retornafc=== undefined) {
  //       retornafc = '';
        
  //     }
  
      var fact = document.getElementsByName('entry.709227128');
  
  
      for (var i = 0, length = fact.length; i < length; i++) {
        if (fact[i].checked) {
       
          var mostrarfac = (fact[i].value);
      
       
      
        }
      
        if (mostrarfac=== undefined) {
          mostrarfac = '';
          
      
      }
  
      if (retornapagos=== "%0A") {
        retornapagos = '';
        
      
      }
  
      }
  
      var fact = document.getElementsByName('entry.2016983664');
  
  
      for (var i = 0, length = fact.length; i < length; i++) {
        if (fact[i].checked) {
       
          var mostrarfac = (fact[i].value);
      
       
      
        }
      
        if (mostrarfac=== undefined) {
          mostrarfac = '';
          
      
      }
  
  
  
      if (retornapagos=== "%0A") {
        retornapagos = '';
        
      
      }
      }
  
      var fact = document.getElementsByName('entry.1758756268');
  
  
      for (var i = 0, length = fact.length; i < length; i++) {
        if (fact[i].checked) {
       
          var mostrarfac = (fact[i].value);
      
       
      
        }
      
        if (mostrarfac=== undefined) {
          mostrarfac = '';
          
      
      }
  
  
      if (retornapagos=== "%0A") {
        retornapagos = '';
        
      
      }
      }
  
  
  
  
  
      
  var mostrarcedula=document.getElementById('entry.2420597').value+"%0A";
  
  
  
  // var fanlink=document.getElementById('fantasmasend').textContent+"%0A"+"Realiza el pago y envíanos una captura del pago para activar tu licencia* 👇"+"%0A";

  var fanlink=document.getElementById('fantasmasend').textContent+ "%20";
  
  
 
  
  
  var factm= document.getElementsByName('entry.2420597');
  
  
  for (var i = 0, length = factm.length; i < length; i++) {
    if (factm[i].checked) {
   
      var mostrarcedula = (factm[i].value+"%0A");
  
   
  
    }
  
    if (mostrarcedula=== undefined) {
      mostrarcedula = '';
      
  
  }
  if (retornapagos=== "%0A") {
    retornapagos = '';
    
  
  }
  }
  
    
  
  var mostrarpedidof=document.querySelector('.fantasma').textContent;
  
  // if( mostrarpedidof === ''|| /^\s+$/.test(totalfp) )  {
  //   document.getElementById("demo").innerHTML =
  //   "Aún no haz selecionado productos "
  
  // }
    
  // var mostrarpedidof2=document.querySelector('.ter').textContent;
  // if(mostrarpedidof2 == null || mostrarpedidof2 .length == 0 || /^\s+$/.test(mostrarpedidof2 )) {
  //   alert("Aún no seleccionas productos 😅");
  
  // }
  
  if(mostrarpedidof == null || mostrarpedidof .length == 0 || /^\s+$/.test(mostrarpedidof )) {
    alert("Aún no seleccionas productos 😅");
    return false;
  }
  
  if(nombre == null || nombre .length == 0 || /^\s+$/.test(nombre )) {
    alert("Llena el campo con tus nombres completos 😅");
    return false;
  }
    
  if(email == null || email .length == 0 || /^\s+$/.test(email )) {
    alert("Ingresa tu mejor correo electrónico 😅");
    return false;
  }
    
  if(whatsapp == null || whatsapp .length == 0 || /^\s+$/.test(whatsapp )) {
    alert("Ingresa tu número de WhatsApp 😅");
    return false;
  }
    
  
  // if(totalfp<= 10 || /^\s+$/.test(totalfp)) {
  //   alert("tu pedido minimó debe ser de $100");
  //   return false;
  // }
  
    // if(  totalfp <= 10|| /^\s+$/.test(totalfp) )  {
      // return (document.getElementById("demo").innerHTML =
      // "Tu pedido mínimo debe ser de $10.00")
    
  // var qw= document.getElementById('latitude').textContent;
  
  
  // var qa=qw.replace('(','');
  // var az=qa.replace(')','');
  // var zx=az.replace(' ','');
  //   var  mapi = 'https://maps.google.com/?q='+zx;
  
  //   // mapi.innerHTML=`${mapi}`;
  
  //   document.getElementById('entry.1441018699').innerHTML=mapi;
  
  // $("#latitude").change(function() {
  //   //Si el checkbox está seleccionado
  //   if($(this).is(":change")) {
      
  //     document.getElementById('entry.1441018699').innerHTML=mapi;
  
  //   }
  //   else {
  //     alert("El checkbox no está seleccionado");
  //   }
  
   
  
    
  //   });
    
    
  
  
  
  
  
  // var mapi="";
  
  // var insertmapgs=document.getElementById("entry.1441018699");
  
  
  // var qw= document.getElementById('latitude').textContent;
  
  
  // var qa=qw.replace('(','');
  // var az=qa.replace(')','');
  // var zx=az.replace(' ',''); 
  // // "-0.0897748,-78.4149483"
  
  
  // mapi = 'https://maps.google.com/?q='+zx;
  
  
  //     insertmapgs.innerHTML=`${mapi}`;
    
  
  
  
  
  
  // var billete= document.getElementById('entry.580204725').textContent;
  
  
  // for (var i = 0, length = billete.length; i < length; i++) {
  //   if (billete[i].checked) {
   
  //     var cambio = (billete[i].value+"%0A");
  
   
  
  //   }
  
  //   if (cambio=== undefined) {
  //     cambio = '';
      
  
  // }
  // if (cambio=== "%0A") {
  //   cambio = '';
    
  
  // }
  // }
  
  // var myWindow = window.open ("https://midominio.com/"+"Demo Ecommerce BurgerKings" + "%20" + "%0A"+"✅  _Pedido confirmado_" + "Orden N°"+orden + "%0A"+"_________________________" + "%0A"+"%0A"+
  //  "*Nombre*" +"%0A" + nombre + "%20" +"%0A"+"%0A" +"*Email*" +"%0A" + email +  "%20" + "%0A"+"%0A"+"*Costo Delivery*"+"%0A" + delivery + "%20" +"%0A"+ "%0A"+"*Dirección con referencia*"+"%0A" +direccion+"%0A"+totalf+ pedidof+ "%0A"+"%0A"+
  //   "%0A"+"%0A"+ "%0A" +"_________________________" + "%0A" + "%0A"+"*P.D.*"+ "%20"+ "Guarda nuestro contacto como  para recibir 15 minutos antes el link de Zoom. Empezamos puntual 😉👍");
  
  
  
  // var myWindow = window.open("https://midominio.com/"+"*Demo Ecommerce FastFood*" + "%20" + "%0A"+"✅ *Pedido confirmado*"+"%0A"+"_Orden N°_"+ "%20"+"---"+"%20"+orden+"%20"+"---"+ "%0A"+"_________________________" + "%0A"+"%0A"+"*Tu pedido es:*"+ "%0A"+ "%0A"+mostrarpedidof+ "%0A"+ "%0A"+"*Total:*"+ "%20"+totalfp+ "%0A"+"_________________________"+ "%0A"+"%0A"+
  //  "*Nombre:*" +"%20"+ nombre+"%0A"+"*Email:*" +"%20" + email+"%0A"+"*Costo Delivery:*"+"%20" + delivery+"%0A"+"*Dirección con referencia:*"+"%20" +direccion+"%0A" +"_________________________"  + "%0A"+"%0A"+"*Forma de pago:*"+"%0A"+ retornapagos+"%0A"+"%0A"+"*Total:*"+ "%20"+totalfp+"%0A"+"%0A"+ "_Para ver más demos ingresa al siguiente link:_"+"%0A");
  
  
  
  // }
  
  
  
  
  // var whatsapp_number ="&text=*Demo WhatsApp Ecommerce*" + "%0A"+"*WhatBulkSender - WhatsEcom - 2020*"+ "%0A"+"✅ *Pedido confirmado*"+"%0A"+"_Orden N°_"+"%20"+ "%20"+"---"+"%20"+orden+"%20"+"---"+ "%0A"+"_________________________" + "%0A"+"*Tu pedido es:*"+ "%0A"+mostrarpedidof+ "%0A"+"Subotal:"+"%20"+ `$${totalfp.toFixed(2)}`+ "%0A"+"Delivery:"+"%20"+"$"+(Number(delivery)).toFixed(2)+ "%0A" +"*Total:*"+ "%20"+ "$"+`${(Number(delivery) + Number(totalfp.toFixed(2))).toFixed(2)}`+ "%0A"+"_________________________"+ "%0A"+'*🙂Datos del Cliente:*'+ "%0A"+mostrarfac+"%20"+mostrarcedula+nombre+email+whatsapp+"%20"+"_________________________" +"%0A"+"*📍Datos de entrega:*"+"%0A"+opcionlocal+"%0A" +"_________________________"  + "%0A"+ retornapagos+ "%0A"  +"*Subtotal:*"+ "%20"+"$"+ totalfp.toFixed(2)+"%0A"+"*Delivery:*"+"%20"+"$"+`${(Number(delivery)).toFixed(2) }`+"%0A"+"*Total:*"+ "%20"+"$"+`${(Number(delivery) + Number(totalfp.toFixed(2))).toFixed(2)}`+"%0A"+"*Orden N°:*"+ "%20"+orden;
    
  
  
  var whatsapp_number ="&text=*Servicio al Cliente*" + "%0A"+"*FlexMasivos-2024*"+ "%0A"+"✅ *Detalle de la consulta:*"+"%0A"+"_N°_"+"%20"+ "%20"+"---"+"%20"+orden+"%20"+"---"+ "%0A"+"_________________________" + "%0A"+mostrarpedidof+"_________________________"+ "%0A"+'*🙂Datos del Cliente:*'+ "%0A"+mostrarfac+"%20"+mostrarcedula+nombre+email+whatsapp+"%20"+"_________________________" +"%0A"+ retornapagos+"%0A"+"*N°:*"+ "%20"+orden;

  //facturon
  
//*Orden exitosa* *WhatsBulkSender-2022* � *Detalle de la orden:* _Orden N°_ --- 1765 --- _________________________ 1 *x* *|* Emprendedor Anual *|* precio $119.99 *|* *total:* $119.99 *Total:* $126.77 _________________________ *�Datos del Cliente:* Rogger WBS info@whatsbulksender.com 324324234 _________________________ *�Forma de pago:* Ingresa al link para hacer el pago, ya incluye comision de Paypal, envíanos una captura por aquí* �----- https://www.paypal.com/paypalme/ivocarrasco/126.77 *Haz una captura y envíanos por aquí* � Emprendedor Anual https://ppls.me/XzjJG9TNCHKWHtTPq3ZvMg *Total:* $126.77 *Orden N°:* 1765
    
    
    
    
     var md = new MobileDetect(window.navigator.userAgent);
     if (md.mobile()) {
     
  
    //   if (mostrarpedidof===''){
  
     
     
    //     document.getElementById("demo").innerHTML =
    //        "Aún no haz selecionado prodcutos"
  
    //       $('.demo').addClass('showmsg');
  
  
    //       setTimeout(function() {
    //         $(".showmsg").fadeOut(1500);
    //         },500);
          
        
        
  
  
    //     // return (document.getElementById("demo").innerHTML =
    //     //   "Aún no haz selecionado prodcutos")
    //   }
    //  else{
      window.open(document.getElementById("enviarwa").href = "https://api.whatsapp.com/send?phone=529211150663" + whatsapp_number);
    //  }
        
      
    // window.open(fanlink)
    
       
  
      
     
  
     } else {
     
       window.open(document.getElementById("enviarwa").href = "https://web.whatsapp.com/send?phone=529211150663" + whatsapp_number);
  
    //   window.open(fanlink)
  
  
  
     }
  
  
   
  
     
  }


//   insertar img y el nombre del producto en el cariito de comparas



  
  // $("#boton").on("click",function(event){
  //   event.preventDefault();
  // });
  
  
  
  // animacion formas de pago 
  
  $('.eti1').on('click', function(){
    $('.datos1').addClass('show btnpagos');
   
    $('.datos2').removeClass('show btnpagos');
    $('.datos3').removeClass('show btnpagos');
    $('.datos4').removeClass('show btnpagos');
  
  })
  
  
  $('.eti2').on('click', function(){
    $('.datos2').addClass('show btnpagos');
    $('.datos1').removeClass('show btnpagos');
    $('.datos3').removeClass('show btnpagos');
    $('.datos4').removeClass('show btnpagos');
  })
  
  $('.eti3').on('click', function(){
    $('.datos3').addClass('show btnpagos');
    $('.datos1').removeClass('show btnpagos');
    $('.datos2').removeClass('show btnpagos');
    $('.datos4').removeClass('show btnpagos');
  })
  
  $('.eti4').on('click', function(){
    $('.datos4').addClass('show btnpagos');
    $('.datos1').removeClass('show btnpagos');
    $('.datos2').removeClass('show btnpagos');
    $('.datos3').removeClass('show btnpagos');
  })
  
  // stylos input
  
  $('.btn-plus, .btn-minus').on('click', function(e) {
    const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
    const input = $(e.target).closest('.input-group').find('input');
    if (input.is('input')) {
      input[0][isNegative ? 'stepDown' : 'stepUp']()
    }
  })
  
  
  // stylos input
  
  $('.btn-plus, .btn-minus').on('click', function(e) {
    const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
    const input = $(e.target).closest('.input-group').find('input');
    if (input.is('input')) {
      input[0][isNegative ? 'stepDown' : 'stepUp']()
    }
  })
  
  $(document).ready(function(){
    var altura =$('.row-centered').offset().top;
    $(window).on('scroll', function(){
      if ($(window).scrollTop()>= altura){
        $('.row-centered').addClass('row-centered2');
      } else{
        $('.row-centered').removeClass('row-centered2');
      }
    })
  });
  
  $('.plus').on('click', function(){
    // $('#cardnegocioid').addClass('mostrarcart');
    $('.hul2').addClass('mostrarmenu3');
  
  })
  
  var wer=document.querySelector('.separatescrol').textContent;
  
  function sdf(){
  
  
  if(wer=""){
  
    $('.psinproductos').addClass('msinproductos');
  }
  
  
  }
  
  // $('#cardnegocioid').on('click', function(){
  //   $('#nav').addClass('mostrarmenu2');
  //   $('#cardnegocioid').addClass('chaoboton');
  // })
  
  
  
  
  
  $('#cardnegocioid').on('click', function(){
    $('#nav').addClass('mostrarmenu2');
   
    $('#cardnegocioid').addClass('chaoboton');
  })
  
  
  $('.continuar,.but34').on('click', function(){
    $('#nav').removeClass('mostrarmenu2');
    $('.hul2').addClass('mostrarmenu3');
    
  })
  
  
   $('.seguirc,.cerrardata').on('click', function(){
    $('#nav').removeClass('mostrarmenu2');
    $('.hul2').removeClass('mostrarmenu3');
    $('#cardnegocioid').removeClass('chaoboton');
    $('#cardnegocioid').addClass('mostrarcart');
    
  
    
  })


  
  
  
  
  
  
  const images = document.querySelectorAll('.item-image'); 
  
  const titles = document.querySelectorAll('.item-title'); 
  const price = document.querySelectorAll('.item-price');
  
  const cantidad = document.querySelectorAll('.item_cantidadg');
  
  const containerimage = document.querySelector('.container-img');
  
  
  const imageContainer =document.querySelector('.img-show');
  
  const copy = document.querySelector('.copy');
  
  const closeModal = document.querySelector('.bx.bx-x');
  
  images.forEach(image =>{
    image.addEventListener('click',()=>{
  addImage(image.getAttribute('src'),image.getAttribute('alt'));
  
  
   
    })
  
  })
  
  titles.forEach(titlesf =>{
  titlesf.addEventListener('click',()=>{
  
  
  })
  })
  
  
  const addImage = (srcImage, altImage)=>{
  containerimage.classList.toggle('move');
  imageContainer.classList.toggle('show');
  imageContainer.src = srcImage;
  copy.innerHTML = altImage;
  
  
  
  }
  
  // const addTitle = (titlef)=>{
  //   containerimage.classList.toggle('move');
  //   imageContainer.classList.toggle('show');
  
  //   titles.innerHTML = ;
  
  
  
  // }
  
  
  closeModal.addEventListener('click', ()=>{
  
  containerimage.classList.toggle('move');
  imageContainer.classList.toggle('show');
  })
  
  
  // $('.seguirc').on('click', function(){$('.derechafinal').addClass('mostrarmenu2');$('#cardnegocioid').addClass('chaoboton');})
  
  // $('.continuar').on('click', function(){
    
  //   $('#cardnegocioid').removeClass('mostrarcart');
  // })
  
  // $('#cardnegocioid', function(){
  //   $('#nav').addClass('mostrarmenu2');
  // se auto ejecuta })
  
  // $('.seguirc ,.continuar').on('click', function(){
  //   $('#nav').removeClass('mostrarmenu2');
  //   $('#cardnegocioid').removeClass('chaoboton');
  // })
  
  
  // $('.mostrarmenu2').on('click', function(){
  //   $('#nav').removeClass('mostrarmenu2');
  //   // $('#nav').removeClass('mostrarmenu2');
  //   $('#cardnegocioid').removeClass('chaoboton');
  
  // })

//   $('#cerrardata2').on('click', function(){

//     location.reload();
    
//   })
  //pepon1



  function limpiarformas(){
  
    document.getElementById("entry.1405646315").checked = false;
    document.getElementById("entry.1179942020").checked = false;
    document.getElementById("entry.2095367105").checked = false;
    var fdg=document.getElementById('entry.1280846489').value='';
    
    document.getElementById('entry.580204725').textContent='';
    document.querySelector('.feepaypal').textContent='';
    var comicpay = document.querySelector('.comicpay');
    comicpay.style.display = 'none';

var sbtotal=document.querySelector('.shoppingCartTotal2').textContent;

var totaltrans= parseFloat(sbtotal.replace("$", ""));

    var stringNumero = document.querySelector('.shoppingCartTotaldelivery').innerHTML=sbtotal;
   
    var chaofantasma=document.getElementById('fantasmasend').textContent='';

   
  }

   






  
  function limpiarformase(){
  
    document.getElementById("entry.696366128").checked = false;
    document.getElementById("entry.1179942020").checked = false;
    document.getElementById("entry.2095367105").checked = false;

    document.querySelector('.feepaypal').textContent='';
    var comicpay = document.querySelector('.comicpay');
    comicpay.style.display = 'none';

var sbtotal=document.querySelector('.shoppingCartTotal2').textContent;

var totaltrans= parseFloat(sbtotal.replace("$", ""));

    var stringNumero = document.querySelector('.shoppingCartTotaldelivery').innerHTML=sbtotal;
    var chaofantasma=document.getElementById('fantasmasend').textContent='';
   
  }
  
  function limpiarformaspl(){
  
    
    document.getElementById("entry.696366128").checked = false;
    document.getElementById("entry.2095367105").checked = false;
  
    var fdg=document.getElementById('entry.1280846489').value='';
    
    document.getElementById('entry.580204725').textContent='';
    document.getElementById('entry.1179942020').textContent='';
   
    document.getElementById("entry.1405646315").checked = false;
 
    
    
   
  }
  
  function limpiarformaspy(){
  
    document.getElementById("entry.1405646315").checked = false;
    document.getElementById("entry.1179942020").checked = false;
    document.getElementById("entry.696366128").checked = false;
    var fdg=document.getElementById('entry.1280846489').value='';
    
    document.getElementById('entry.580204725').textContent='';
    document.querySelector('.feepaypal').textContent='';
    var comicpay = document.querySelector('.comicpay');
    comicpay.style.display = 'none';

var sbtotal=document.querySelector('.shoppingCartTotal2').textContent;

var totaltrans= parseFloat(sbtotal.replace("$", ""));

    var stringNumero = document.querySelector('.shoppingCartTotaldelivery').innerHTML=sbtotal;
  }

 
  
  
  // limpiar factura
  
  
  function limpiarfac(){
  
    document.getElementById("entry.2016983664").checked = false;
    document.getElementById("entry.1758756268").checked = false;
   
   
  }
  function limpiarfac(){
  
    document.getElementById("entry.2016983664").checked = false;
    document.getElementById("entry.1758756268").checked = false;
   
   
  }
  
  
  function limpiarconsu(){
    
  
    document.getElementById('entry.2420597').value = '';
    document.getElementById("entry.709227128").checked = false;
    document.getElementById("entry.1758756268").checked = false;
  
  }
  
  
  
  function limpiarcliente(){
  
    document.getElementById('entry.2420597').value = '';
    document.getElementById("entry.709227128").checked = false;
  
    document.getElementById("entry.2016983664").checked = false;
  
    $('.datosfacturacion').addClass('datoschao');
  }
  
  
  
  
  function linpiarreserdomi(){
   
    document.getElementById('entry.1441018699').textContent='';
    
  
    document.getElementById("entry.1067299390").checked = false;
    document.getElementById('entry.686290451').value = '0';
    document.getElementById('entry.803987817').value = '';
  
    document.getElementById("entry.398428276").checked = false;
    document.getElementById('entry.1164560529').value = '0';
    document.getElementById('entry.404593967').value = '';
  
   
  
   limpiaringd();
   limpiaringdmap();
   
   document.getElementById("entry.2092178738").textContent='';
    // linpiarreservar();
    // linpiardelivery();
  //  document.querySelector('#totalwa p').textContent='0.00';
  
  }
  
  
  function linpiarreservar(){
  
    document.getElementById("entry.398428276").checked = false;
    document.getElementById("entry.1612018657").checked = false;
  
    document.getElementById('entry.1164560529').value = '0';
    document.getElementById('entry.404593967').value = '';
  
  
  }
  
  function linpiardelivery(){
  
  
  
    document.getElementById("entry.696366128").checked = false;
  
    document.getElementById("entry.1405646315").checked = false;
    
    document.getElementById("entry.1179942020").checked = false;
    
    document.getElementById("entry.2095367105").checked = false;
  
  
    limpiaringd();
  
    limpiaringdmap();
    document.getElementById("entry.1067299390").checked = false;
    
  document.getElementById("entry.1612018657").checked = false;
  
    document.getElementById('entry.686290451').value = '0';
    document.getElementById('entry.803987817').value = '';
    // document.querySelector('#latitude').textContent='';
    // document.querySelector('#address').textContent='';
    document.getElementById('entry.1441018699').textContent='';
    document.getElementById('entry.2092178738').textContent='';
    document.getElementById("entry.1441018699").textContent = '';
  
    document.getElementById('entry.1280846489').value='';
  
  document.getElementById('entry.580204725').textContent='';
  
  
  
  
  
  
  
  
  
  
  }
  
  
  
  
  function limpiaringd(){
  
  
    document.getElementById("entry.2092178738").checked = false;
  
  
  }
  
  function limpiaringdmap(){
  
  
    document.getElementById("entry.150273747").checked = false;
  
  
  }
  
  
  
  
  $('.consumidorsinfac').on('click', function(){
    
  
    $('.datafac').removeClass('showinputcedula');
  
  
    $('.datosfacturacion').removeClass('datoschao');
    $('#cedulafac')('showinputcedula');
    
  
  
  })
  
  $('.faccedula').on('click', function(){
    
    $('.datafac').addClass('showinputcedula');
    $('.datosfacturacion').removeClass('datoschao');
  
  })
  
  
  $('.clientefac').on('click', function(){
  
    
    $('.datafac').removeClass('showinputcedula');
  
    $('.datosfacturacion').addClass('datoschao');
  
  })
  
  
  
  
  $('.deliveryope').on('click', function(){
      
    $('.opedetalle').addClass('showpocion');
    $('.diahora').removeClass('verdiahora');
  
    $('.formasdepagos').removeClass('quitarformasdepago');
  
  })
  
  $('.deliveryoper').on('click', function(){
      
    $('.diahora').addClass('verdiahora');
  
  
    $('.diahora').addClass('verdiahora');
  
    $('.formasdepagos').addClass('quitarformasdepago');
  
    // $('.formasdepagos').remove('.formasdepagos');
   
  
    
  
  })
  
  
  
  
  
  
  
  $('.deliveryoper , .deliveryoperr').on('click', function(){
    
  
    $('.opedetalle').removeClass('showpocion');
  
  
  
    // $('#cedulafac')('showinputcedula');
  
  
  })
  
  $('.deliveryoperr').on('click', function(){
    
  
    $('.diahora').removeClass('verdiahora');
  
    $('.formasdepagos').removeClass('quitarformasdepago');
  
    // $('#cedulafac')('showinputcedula');
  
  
  })
  
  $('.mapalocor').on('click', function(){
    
  
    $('.direcreg').addClass('showpocion');
  
    $('.mapcanvas').removeClass('showcanvas');
    $('.googlemaps').removeClass('googledisplay');
  
  })
  
  
  
  $('.mapalocor2').on('click', function(){
    
  
    $('.direcreg').removeClass('showpocion');
  
    $('.mapcanvas').addClass('showcanvas');
  
    $('.googlemaps').addClass('googledisplay');
  
  
  })
  
  
  
  var map;
  
  function initialize() {
  
    var mapOptions = {
        center: new google.maps.LatLng(-0.1769941, -78.478394,17),
        zoom: 17
    };
  
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
    // Create the DIV to hold the control and call the constructor passing in this DIV
    var geolocationDiv = document.createElement('div');
    var geolocationControl = new GeolocationControl(geolocationDiv, map);
  
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(geolocationDiv);
  
    // map.addListener("click", (event) => {
    //   addMarker(event.latLng);
    // });
  
    // addMarker(mapOptions);
  
  
  }
  
  function GeolocationControl(controlDiv, map) {
  
    // Set CSS for the control button
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#25d366';
    controlUI.style.borderStyle = 'solid';
    controlUI.style.borderWidth = '1px';
    controlUI.style.borderColor = 'white';
    controlUI.style.height = '40px';
    controlUI.style.borderRadius = '5px';
    controlUI.style.zIndex = '1000';
    controlUI.style.width= '200px';
    controlUI.style.marginTop = '50px';
    controlUI.style.cursor = 'pointer';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to center map on your location';
    controlDiv.appendChild(controlUI);
  
    // Set CSS for the control text
    var controlText = document.createElement('div');
    controlText.style.fontFamily = 'Arial,sans-serif';
    controlText.style.fontSize = '13px';
    controlText.style.color = 'white';
    controlText.style.paddingLeft = '10px';
    controlText.style.paddingRight = '10px';
    controlText.style.marginTop = '8px';
    controlUI.style.zIndex = '1000';
    controlText.innerHTML = 'Pulsa aquí para seleccionar tu ubicación';
    controlUI.appendChild(controlText);
  
    // Setup the click event listeners to geolocate user
    google.maps.event.addDomListener(controlUI, 'click', geolocate);
  }
  
  
  
  
  // var qw= document.getElementById('latitude').textContent;
  
  
  // var qa=qw.replace('(','');
  // var az=qa.replace(')','');
  // var zx=az.replace(' ','');
  //   var  mapi = 'https://maps.google.com/?q='+zx;
  
  //   // mapi.innerHTML=`${mapi}`;
  
  //   document.getElementById('entry.1441018699').innerHTML=mapi;
  
  // $("#latitude").change(function() {
  //   //Si el checkbox está seleccionado
  //   if($(this).is(":change")) {
      
  //     document.getElementById('entry.1441018699').innerHTML=mapi;
  
  //   }
  //   else {
  //     alert("El checkbox no está seleccionado");
  //   }
  
    
  //   });
  
  
  function geolocate() {
    
  
    if (navigator.geolocation) {
  
        navigator.geolocation.getCurrentPosition(function (position) {
  
            var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
            let post='';
  
  
  
  
      var latDiv =document.querySelector('#latitude').innerHTML=pos;
  
    
  var sw=document.getElementById('latitude').textContent;
   
  var qa=sw.replace('(','');
  var qw=qa.replace(')','');
  var qz=qw.replace(' ','');
  
  var latDiv2 =document.getElementById('entry.1441018699').innerHTML='https://maps.google.com/?q='+qz;
    
     
   
  
      var addrDiv =document.querySelector('.address');
  
  
  
      var geocoder=new google.maps.Geocoder;
  
  
  
          geocoder.geocode({'location': pos}, function(results, status){
                if (status === 'OK'){
                    if (results[0]){
                        addrDiv.innerHTML ='Tu dirección de entrega es: '+ results[0].formatted_address;
  
                        
  
                    } else {
                        addrDiv.innerHTML = 'No address could be retrieved.'
                    }
                } else {
                    addrDiv.innerHTML = "Geocoder failed due to " + status;
                }
  
              
                    
            });
  
          
  
  
            // Create a marker and center map on user location
            marker = new google.maps.Marker({
                position: pos,
                draggable: true,
                animation: google.maps.Animation.DROP,
                map: map
            });
  
            map.setCenter(pos);
  
            // function setMapOnAll(maker) {
            //   for (let i = 0; i < marker.length; i++) {
            //     marker[i].setMap();
            //   }
            // }
            
            // function clearMarkers() {
            
            //   $(".delyveryoper").click(function() {
            //       //Si el checkbox está seleccionado
            //       if($(this).is("clicked")) {
            //         setMapOnAll(null);
            //       }
            //       else {
            //         alert("El checkbox no está seleccionado");
            //       }
                
            //     });
  
               
             
            // }
  
            // clearMarkers();
  
  
  
  
        
        });
  
  
  
        
    }
  
   
  }
  
  initialize();
  
  
  var ws=document.getElementById('intro').textContent;
  
  
  document.getElementById('entry.1450118414').innerHTML=ws;
  
  
  $('.owl-carousel').owlCarousel({
    // stagePadding: 10,
  
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
  })

  
  
  
  
  $('.modalv').on('click', function(){$('.modalv').addClass('nosvemos2')})
  
  
  //   $('#C1-I1-p,#C1-I2-p,#C1-I3-p,#C1-I4-p,#C1-I5-p').addClass('energon');
  
  //   $('#C1-I1-p,#C1-I2-p,#C1-I3-p,#C1-I4-p,#C1-I5-p').on('click', function(){
    
  
  //     $('.plust').addClass('energont');
  //     $('.minus').addClass('displaymq');
  //     $('.quantity').addClass('displaymq');
  
  
  //   })
  
  
  
  
  // let pbtn = document.querySelector('.plus');
  
  
  //  let ptbtn = document.querySelector('.plust');
  //  let mbtn = document.querySelector('.minus');
  //  let qbtn = document.querySelector('.quantity');
  
  //   $('.plust').on('click', function(){
  
  
  //     ptbtn.innerText='';
  
  //     mbtn.style.display='inline-block'; 
  //     qbtn.style.display='inline-block';
  
  //     $('#C1-I1-p,#C1-I2-p,#C1-I3-p,#C1-I4-p,#C1-I5-p').removeClass('energon');
  //     // $('#C2-I1-p,').removeClass('energon');
  //    $('.plust').removeClass('energont');
     
  //    $('.minus').removeClass('displaymq');
  //    $('.quantity').removeClass('displaymq');
   
     
  //      })
  
  
  
  
  var recaptcha_response1 = '';
  function submitUserForm1() {
      if(recaptcha_response1.length == 0) {
          document.getElementById('g-recaptcha-error1').innerHTML = '<span style="color:red;">This field is required.</span>';
          return false;
  
  
          
      }
          $('#gform2 *').fadeOut(2000);
      $('#gform2').prepend('<div class="cerrardata2"> <div><span class="icon-flecha-izq"></span></div></div> <br><p class="pgracias">¡Gracias! Tu pedido ha sido enviado con éxito, <strong>espera unos segundos,</strong> enseguida recibirás un WhatsApp con las instruciones para realizar el pago. 🙂</p>');
    
      $('.cerrardata2').click(function() {
        location.reload();
      
      });

      goToPagep();
    //   location.reload(); no permite enviar a google forms
   
  }
  
  
  
  
          
  function verifyCaptcha1(token) {
      recaptcha_response1 = token;
      document.getElementById('g-recaptcha-error1').innerHTML = '';
  }
  
  
     
          
  
  // date = new Date();
  // year = date.getFullYear();
  // month = date.getMonth() +2;
  // day = date.getDate()+ 2;
  // document.getElementById("current_date").innerHTML =  day  + "/" + month + "/" + year;
  
  // document.getElementById("current_date2").innerHTML =  day  + "/" + month + "/" + year;
  // // chat
  
  // $('#cerrarchat2').on('click', function(){
  
  //   $('.cardmenu').css('left', '-100%');
  //   document.getElementById("whaterror").style="display: none";
  // })
  
  
    
  
  $('.cardnegocio2').click(function() {
    $('#cardmenu').css('left', '0');
    
    });
  
  
  $('.cardnegocio2').on('click', function(){
    $('#cardmenu').addClass('mostrarcardmenu');
  })
  
  $('#cerrarchat2').on('click', function(){
    $('#cardmenu').toggleClass('mostrarcardmenu');
    document.getElementById('edad').value = '';
    $('.cardmenu').css('left', '-100%');
  })
  
  
  
  
  setTimeout(function() {
    $(".unowhat2").fadeIn(1000);
  },8500);
  
  
   
  function obtenerdatos2(){
    var nombre = document.getElementById('edad').value;
  
  
  
    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
       
        return (document.getElementById("whaterror").innerHTML =
        "¿Como podemos ayudarte? 😽👇",document.getElementById("whaterror").style=" color: #25d366; position: relative; padding: 15px;  margin: 0 26px 20px; border-radius: 15px; background-color: #fff; color: #4a4a4a; box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%); transition: 0.5s ease-in-out;")
      }
  
   
  
  
      
  
  
      document.getElementById('edad').value = '';
      document.getElementById('edad').style ="height 0";
  
    var myWindow = "&text="+nombre;
  
    var md = new MobileDetect(window.navigator.userAgent);
       if (md.mobile()) {
  
        window.open(document.getElementById("enviarwa2").href = "https://api.whatsapp.com/send?phone=529211150663" + myWindow);
        
       
          } else {
       
        window.open(document.getElementById("enviarwa2").href = "https://web.whatsapp.com/send?phone=529211150663" + myWindow);
   
       
       
      }
  
  
     
      $('.cardmenu').css('left', '-100%');
  }
  
  
  
  
  
  
  function goToPageayuda(){
    var nombre = document.getElementById('entry.865577691').value;
    var nombrenegocio = document.getElementById('entry.116133504').value;
    var tipodenegocio = document.getElementById('entry.516082604').value;
    var whatsapp = document.getElementById('entry.751884520').value;
    // var diaprueba = document.getElementById('entry.1087253973').value;
    // var horaprueba = document.getElementById('entry.1527657423').value;
  
    // if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
       
    //   return (document.getElementById("demo").innerHTML =
    //   "Ingresa tu nombre completo")
    // }
    // if( nombrenegocio == null || nombrenegocio.length == 0 || /^\s+$/.test(nombrenegocio) ) {
       
    //   return (document.getElementById("demo").innerHTML =
    //   "Ingresa el nombre de tu negocio")
    // }
    // if( tipodenegocio == null || tipodenegocio.length == 0 || /^\s+$/.test(tipodenegocio) ) {
       
    //   return (document.getElementById("demo").innerHTML =
    //   "Selecciona el tipo de negocio")
    // }
    // if( whatsapp == null || whatsapp.length == 0 || /^\s+$/.test(whatsapp) ) {
       
    //   return (document.getElementById("demo").innerHTML =
    //   "Ingresa un número de WhatsApp")
    // }
    // if( diaprueba == null || diaprueba.length == 0 || /^\s+$/.test(diaprueba) ) {
       
    //   return (document.getElementById("demo").innerHTML =
    //   "Selecciona el día para la prueba")
    // }
    // if( horaprueba == null || horaprueba.length == 0 || /^\s+$/.test(horaprueba) ) {
       
    //   return (document.getElementById("demo").innerHTML =
    //   "Selecciona una hora")
    // }
  
  //   var myWindow = window.open ("https://api.whatsapp.com/send?phone=529211150663&text="+"Capacitación y Prueba de" + "%20" + "*WhatsBulkSender™*" + "%0A"+"✅ _Registro confirmado_" + "%0A"+"_________________________" + "%0A"+"%0A"+ "*Nombre*" +"%0A" + nombre + "%20" +"%0A"+"%0A" +"*Nombre del Negocio*" +"%0A" + nombrenegocio +  "%20" + "%0A"+"%0A"+"*Tipo de Negocio*"+"%0A" + tipodenegocio + "%20" +"%0A"+ "%0A"+ "_________________________" + "%0A" + "%0A"+"*P.D.*"+ "%20"+ "Guarda nuestro contacto como *WhatsBulkSender* para recibir actualizaciones y soporte 😉👍");
  
  
  //  window.location = "https://api.whatsapp.com/send?phone=529211150663&text="+ "*Hola me llamo:*" + "%0A" + nombre + "%20" +"%0A" + nombrenegocio +  "%20" + "%0A" + tipodenegocio + "%20" + "%0A";
  
  
  $(".ordernumber2").val(function(){
    return document.getElementById('intro').innerHTML=Math.floor(Math.random() * 999) + 1000
  
  })

  var orden = document.querySelector('.ordernumber2').value; 
  
  
  var whatsapp_number ="&text=*CRM-Whats™*" + "%0A"+"✅ _Solicitud Aprobada Prueba N°:_"+ "%20"+orden + "%0A"+"_________________________" + "%0A"+"%0A"+ "*😃 Nombre:*" +"%0A" + nombre + "%20" +"%0A"+"%0A" +"*📧 Email:*" +"%0A" + nombrenegocio +  "%20" + "%0A"+"%0A"+"*🟢 Versión de Prueba:*"+"%0A" + tipodenegocio + "%20" + "%0A"+"_________________________" + "%0A"+"%0A"+ "*Un especialista se contactará de inmediato para realizar la prueba.*"+ "%0A"+ "%0A"+"*P.D.*"+ "%20"+ " *!Importante¡* Guarda nuestro contacto como *CRM-Whats* para recibir toda la información😉👍";
  
  
  
  
  
  
   var md = new MobileDetect(window.navigator.userAgent);
   if (md.mobile()) {
   
  
  //   if (mostrarpedidof===''){
  
   
   
  //     document.getElementById("demo").innerHTML =
  //        "Aún no haz selecionado prodcutos"
  
  //       $('.demo').addClass('showmsg');
  
  
  //       setTimeout(function() {
  //         $(".showmsg").fadeOut(1500);
  //         },500);
        
      
      
  
  
  //     // return (document.getElementById("demo").innerHTML =
  //     //   "Aún no haz selecionado prodcutos")
  //   }
  //  else{
    window.open(document.getElementById("enviarwat").href = "https://api.whatsapp.com/send?phone=529211150663" + whatsapp_number);
  //  }
      
    
  
  
     
  
    
   
  
   } else {
   
     window.open(document.getElementById("enviarwa").href = "https://web.whatsapp.com/send?phone=529211150663" + whatsapp_number);
  
    
  
  
   }
  
  
  
  }
  
  
    
  var recaptcha_response2 = '';
  function submitUserForm2() {
      if(recaptcha_response2.length == 0) {
          document.getElementById('g-recaptcha-error2').innerHTML = '<span style="color:red;">This field is required.</span>';
          return false;
          
      }
    
      $('#gform3 *').fadeOut(2000);
      $('#gform3').prepend('<p class="pgracias">¡Gracias! Tu formulario ha sido enviado con éxito, <strong>espera unos segundos,</strong> enseguida recibirás un WhatsApp con las instruciones🙂</p>');
      
    
  
      goToPageayuda();
      
   
  }
  
  
  
      
  function verifyCaptcha2(token) {
    recaptcha_response2 = token;
    document.getElementById('g-recaptcha-error2').innerHTML = '';
  }
  
  
  
  
  
  
  
  
  var paises = [
  {"nombrePais":"Afganistán","codPais":"AF"},
  {"nombrePais":"Albania","codPais":"AL"},
  {"nombrePais":"Alemania","codPais":"DE"},
  {"nombrePais":"Andorra","codPais":"AD"},
  {"nombrePais":"Angola","codPais":"AO"},
  {"nombrePais":"Anguila","codPais":"AI"},
  {"nombrePais":"Antártida","codPais":"AQ"},
  {"nombrePais":"Antigua y Barbuda","codPais":"AG"},
  {"nombrePais":"Arabia Saudita","codPais":"SA"},
  {"nombrePais":"Argelia","codPais":"DZ"},
  {"nombrePais":"Argentina","codPais":"AR"},
  {"nombrePais":"Armenia","codPais":"AM"},
  {"nombrePais":"Aruba","codPais":"AW"},
  {"nombrePais":"Australia","codPais":"AU"},
  {"nombrePais":"Austria","codPais":"AT"},
  {"nombrePais":"Azerbaiyán","codPais":"AZ"},
  {"nombrePais":"Bélgica","codPais":"BE"},
  {"nombrePais":"Bahamas","codPais":"BS"},
  {"nombrePais":"Bahrein","codPais":"BH"},
  {"nombrePais":"Bangladesh","codPais":"BD"},
  {"nombrePais":"Barbados","codPais":"BB"},
  {"nombrePais":"Belice","codPais":"BZ"},
  {"nombrePais":"Benín","codPais":"BJ"},
  {"nombrePais":"Bhután","codPais":"BT"},
  {"nombrePais":"Bielorrusia","codPais":"BY"},
  {"nombrePais":"Birmania","codPais":"MM"},
  {"nombrePais":"Bolivia","codPais":"BO"},
  {"nombrePais":"Bosnia y Herzegovina","codPais":"BA"},
  {"nombrePais":"Botsuana","codPais":"BW"},
  {"nombrePais":"Brasil","codPais":"BR"},
  {"nombrePais":"Brunéi","codPais":"BN"},
  {"nombrePais":"Bulgaria","codPais":"BG"},
  {"nombrePais":"Burkina Faso","codPais":"BF"},
  {"nombrePais":"Burundi","codPais":"BI"},
  {"nombrePais":"Cabo Verde","codPais":"CV"},
  {"nombrePais":"Camboya","codPais":"KH"},
  {"nombrePais":"Camerún","codPais":"CM"},
  {"nombrePais":"Canadá","codPais":"CA"},
  {"nombrePais":"Chad","codPais":"TD"},
  {"nombrePais":"Chile","codPais":"CL"},
  {"nombrePais":"China","codPais":"CN"},
  {"nombrePais":"Chipre","codPais":"CY"},
  {"nombrePais":"Ciudad del Vaticano","codPais":"VA"},
  {"nombrePais":"Colombia","codPais":"CO"},
  {"nombrePais":"Comoras","codPais":"KM"},
  {"nombrePais":"República del Congo","codPais":"CG"},
  {"nombrePais":"República Democrática del Congo","codPais":"CD"},
  {"nombrePais":"Corea del Norte","codPais":"KP"},
  {"nombrePais":"Corea del Sur","codPais":"KR"},
  {"nombrePais":"Costa de Marfil","codPais":"CI"},
  {"nombrePais":"Costa Rica","codPais":"CR"},
  {"nombrePais":"Croacia","codPais":"HR"},
  {"nombrePais":"Cuba","codPais":"CU"},
  {"nombrePais":"Curazao","codPais":"CW"},
  {"nombrePais":"Dinamarca","codPais":"DK"},
  {"nombrePais":"Dominica","codPais":"DM"},
  {"nombrePais":"Ecuador","codPais":"EC"},
  {"nombrePais":"Egipto","codPais":"EG"},
  {"nombrePais":"El Salvador","codPais":"SV"},
  {"nombrePais":"Emiratos Árabes Unidos","codPais":"AE"},
  {"nombrePais":"Eritrea","codPais":"ER"},
  {"nombrePais":"Eslovaquia","codPais":"SK"},
  {"nombrePais":"Eslovenia","codPais":"SI"},
  {"nombrePais":"España","codPais":"ES"},
  {"nombrePais":"Estados Unidos","codPais":"US"},
  {"nombrePais":"Estonia","codPais":"EE"},
  {"nombrePais":"Etiopía","codPais":"ET"},
  {"nombrePais":"Filipinas","codPais":"PH"},
  {"nombrePais":"Finlandia","codPais":"FI"},
  {"nombrePais":"Fiyi","codPais":"FJ"},
  {"nombrePais":"Francia","codPais":"FR"},
  {"nombrePais":"Gabón","codPais":"GA"},
  {"nombrePais":"Gambia","codPais":"GM"},
  {"nombrePais":"Georgia","codPais":"GE"},
  {"nombrePais":"Ghana","codPais":"GH"},
  {"nombrePais":"Gibraltar","codPais":"GI"},
  {"nombrePais":"Granada","codPais":"GD"},
  {"nombrePais":"Grecia","codPais":"GR"},
  {"nombrePais":"Groenlandia","codPais":"GL"},
  {"nombrePais":"Guadalupe","codPais":"GP"},
  {"nombrePais":"Guam","codPais":"GU"},
  {"nombrePais":"Guatemala","codPais":"GT"},
  {"nombrePais":"Guayana Francesa","codPais":"GF"},
  {"nombrePais":"Guernsey","codPais":"GG"},
  {"nombrePais":"Guinea","codPais":"GN"},
  {"nombrePais":"Guinea Ecuatorial","codPais":"GQ"},
  {"nombrePais":"Guinea-Bissau","codPais":"GW"},
  {"nombrePais":"Guyana","codPais":"GY"},
  {"nombrePais":"Haití","codPais":"HT"},
  {"nombrePais":"Honduras","codPais":"HN"},
  {"nombrePais":"Hong kong","codPais":"HK"},
  {"nombrePais":"Hungría","codPais":"HU"},
  {"nombrePais":"India","codPais":"IN"},
  {"nombrePais":"Indonesia","codPais":"ID"},
  {"nombrePais":"Irán","codPais":"IR"},
  {"nombrePais":"Irak","codPais":"IQ"},
  {"nombrePais":"Irlanda","codPais":"IE"},
  {"nombrePais":"Isla Bouvet","codPais":"BV"},
  {"nombrePais":"Isla de Man","codPais":"IM"},
  {"nombrePais":"Isla de Navidad","codPais":"CX"},
  {"nombrePais":"Isla Norfolk","codPais":"NF"},
  {"nombrePais":"Islandia","codPais":"IS"},
  {"nombrePais":"Islas Bermudas","codPais":"BM"},
  {"nombrePais":"Islas Caimán","codPais":"KY"},
  {"nombrePais":"Islas Cocos (Keeling)","codPais":"CC"},
  {"nombrePais":"Islas Cook","codPais":"CK"},
  {"nombrePais":"Islas de Åland","codPais":"AX"},
  {"nombrePais":"Islas Feroe","codPais":"FO"},
  {"nombrePais":"Islas Georgias del Sur y Sandwich del Sur","codPais":"GS"},
  {"nombrePais":"Islas Heard y McDonald","codPais":"HM"},
  {"nombrePais":"Islas Maldivas","codPais":"MV"},
  {"nombrePais":"Islas Malvinas","codPais":"FK"},
  {"nombrePais":"Islas Marianas del Norte","codPais":"MP"},
  {"nombrePais":"Islas Marshall","codPais":"MH"},
  {"nombrePais":"Islas Pitcairn","codPais":"PN"},
  {"nombrePais":"Islas Salomón","codPais":"SB"},
  {"nombrePais":"Islas Turcas y Caicos","codPais":"TC"},
  {"nombrePais":"Islas Ultramarinas Menores de Estados Unidos","codPais":"UM"},
  {"nombrePais":"Islas Vírgenes Británicas","codPais":"VG"},
  {"nombrePais":"Islas Vírgenes de los Estados Unidos","codPais":"VI"},
  {"nombrePais":"Israel","codPais":"IL"},
  {"nombrePais":"Italia","codPais":"IT"},
  {"nombrePais":"Jamaica","codPais":"JM"},
  {"nombrePais":"Japón","codPais":"JP"},
  {"nombrePais":"Jersey","codPais":"JE"},
  {"nombrePais":"Jordania","codPais":"JO"},
  {"nombrePais":"Kazajistán","codPais":"KZ"},
  {"nombrePais":"Kenia","codPais":"KE"},
  {"nombrePais":"Kirguistán","codPais":"KG"},
  {"nombrePais":"Kiribati","codPais":"KI"},
  {"nombrePais":"Kuwait","codPais":"KW"},
  {"nombrePais":"Líbano","codPais":"LB"},
  {"nombrePais":"Laos","codPais":"LA"},
  {"nombrePais":"Lesoto","codPais":"LS"},
  {"nombrePais":"Letonia","codPais":"LV"},
  {"nombrePais":"Liberia","codPais":"LR"},
  {"nombrePais":"Libia","codPais":"LY"},
  {"nombrePais":"Liechtenstein","codPais":"LI"},
  {"nombrePais":"Lituania","codPais":"LT"},
  {"nombrePais":"Luxemburgo","codPais":"LU"},
  {"nombrePais":"México","codPais":"MX"},
  {"nombrePais":"Mónaco","codPais":"MC"},
  {"nombrePais":"Macao","codPais":"MO"},
  {"nombrePais":"Macedônia","codPais":"MK"},
  {"nombrePais":"Madagascar","codPais":"MG"},
  {"nombrePais":"Malasia","codPais":"MY"},
  {"nombrePais":"Malawi","codPais":"MW"},
  {"nombrePais":"Mali","codPais":"ML"},
  {"nombrePais":"Malta","codPais":"MT"},
  {"nombrePais":"Marruecos","codPais":"MA"},
  {"nombrePais":"Martinica","codPais":"MQ"},
  {"nombrePais":"Mauricio","codPais":"MU"},
  {"nombrePais":"Mauritania","codPais":"MR"},
  {"nombrePais":"Mayotte","codPais":"YT"},
  {"nombrePais":"Micronesia","codPais":"FM"},
  {"nombrePais":"Moldavia","codPais":"MD"},
  {"nombrePais":"Mongolia","codPais":"MN"},
  {"nombrePais":"Montenegro","codPais":"ME"},
  {"nombrePais":"Montserrat","codPais":"MS"},
  {"nombrePais":"Mozambique","codPais":"MZ"},
  {"nombrePais":"Namibia","codPais":"NA"},
  {"nombrePais":"Nauru","codPais":"NR"},
  {"nombrePais":"Nepal","codPais":"NP"},
  {"nombrePais":"Nicaragua","codPais":"NI"},
  {"nombrePais":"Niger","codPais":"NE"},
  {"nombrePais":"Nigeria","codPais":"NG"},
  {"nombrePais":"Niue","codPais":"NU"},
  {"nombrePais":"Noruega","codPais":"NO"},
  {"nombrePais":"Nueva Caledonia","codPais":"NC"},
  {"nombrePais":"Nueva Zelanda","codPais":"NZ"},
  {"nombrePais":"Omán","codPais":"OM"},
  {"nombrePais":"Países Bajos","codPais":"NL"},
  {"nombrePais":"Pakistán","codPais":"PK"},
  {"nombrePais":"Palau","codPais":"PW"},
  {"nombrePais":"Palestina","codPais":"PS"},
  {"nombrePais":"Panamá","codPais":"PA"},
  {"nombrePais":"Papúa Nueva Guinea","codPais":"PG"},
  {"nombrePais":"Paraguay","codPais":"PY"},
  {"nombrePais":"Perú","codPais":"PE"},
  {"nombrePais":"Polinesia Francesa","codPais":"PF"},
  {"nombrePais":"Polonia","codPais":"PL"},
  {"nombrePais":"Portugal","codPais":"PT"},
  {"nombrePais":"Puerto Rico","codPais":"PR"},
  {"nombrePais":"Qatar","codPais":"QA"},
  {"nombrePais":"Reino Unido","codPais":"GB"},
  {"nombrePais":"República Centroafricana","codPais":"CF"},
  {"nombrePais":"República Checa","codPais":"CZ"},
  {"nombrePais":"República Dominicana","codPais":"DO"},
  {"nombrePais":"República de Sudán del Sur","codPais":"SS"},
  {"nombrePais":"Reunión","codPais":"RE"},
  {"nombrePais":"Ruanda","codPais":"RW"},
  {"nombrePais":"Rumanía","codPais":"RO"},
  {"nombrePais":"Rusia","codPais":"RU"},
  {"nombrePais":"Sahara Occidental","codPais":"EH"},
  {"nombrePais":"Samoa","codPais":"WS"},
  {"nombrePais":"Samoa Americana","codPais":"AS"},
  {"nombrePais":"San Bartolomé","codPais":"BL"},
  {"nombrePais":"San Cristóbal y Nieves","codPais":"KN"},
  {"nombrePais":"San Marino","codPais":"SM"},
  {"nombrePais":"San Martín (Francia)","codPais":"MF"},
  {"nombrePais":"San Pedro y Miquelón","codPais":"PM"},
  {"nombrePais":"San Vicente y las Granadinas","codPais":"VC"},
  {"nombrePais":"Santa Elena","codPais":"SH"},
  {"nombrePais":"Santa Lucía","codPais":"LC"},
  {"nombrePais":"Santo Tomé y Príncipe","codPais":"ST"},
  {"nombrePais":"Senegal","codPais":"SN"},
  {"nombrePais":"Serbia","codPais":"RS"},
  {"nombrePais":"Seychelles","codPais":"SC"},
  {"nombrePais":"Sierra Leona","codPais":"SL"},
  {"nombrePais":"Singapur","codPais":"SG"},
  {"nombrePais":"Sint Maarten","codPais":"SX"},
  {"nombrePais":"Siria","codPais":"SY"},
  {"nombrePais":"Somalia","codPais":"SO"},
  {"nombrePais":"Sri lanka","codPais":"LK"},
  {"nombrePais":"Sudáfrica","codPais":"ZA"},
  {"nombrePais":"Sudán","codPais":"SD"},
  {"nombrePais":"Suecia","codPais":"SE"},
  {"nombrePais":"Suiza","codPais":"CH"},
  {"nombrePais":"Surinám","codPais":"SR"},
  {"nombrePais":"Svalbard y Jan Mayen","codPais":"SJ"},
  {"nombrePais":"Swazilandia","codPais":"SZ"},
  {"nombrePais":"Tayikistán","codPais":"TJ"},
  {"nombrePais":"Tailandia","codPais":"TH"},
  {"nombrePais":"Taiwán","codPais":"TW"},
  {"nombrePais":"Tanzania","codPais":"TZ"},
  {"nombrePais":"Territorio Británico del Océano Índico","codPais":"IO"},
  {"nombrePais":"Territorios Australes y Antárticas Franceses","codPais":"TF"},
  {"nombrePais":"Timor Oriental","codPais":"TL"},
  {"nombrePais":"Togo","codPais":"TG"},
  {"nombrePais":"Tokelau","codPais":"TK"},
  {"nombrePais":"Tonga","codPais":"TO"},
  {"nombrePais":"Trinidad y Tobago","codPais":"TT"},
  {"nombrePais":"Tunez","codPais":"TN"},
  {"nombrePais":"Turkmenistán","codPais":"TM"},
  {"nombrePais":"Turquía","codPais":"TR"},
  {"nombrePais":"Tuvalu","codPais":"TV"},
  {"nombrePais":"Ucrania","codPais":"UA"},
  {"nombrePais":"Uganda","codPais":"UG"},
  {"nombrePais":"Uruguay","codPais":"UY"},
  {"nombrePais":"Uzbekistán","codPais":"UZ"},
  {"nombrePais":"Vanuatu","codPais":"VU"},
  {"nombrePais":"Venezuela","codPais":"VE"},
  {"nombrePais":"Vietnam","codPais":"VN"},
  {"nombrePais":"Wallis y Futuna","codPais":"WF"},
  {"nombrePais":"Yemen","codPais":"YE"},
  {"nombrePais":"Yibuti","codPais":"DJ"},
  {"nombrePais":"Zambia","codPais":"ZM"},
  {"nombrePais":"Zimbabue","codPais":"ZW"}
  ];
  
      var ofertaBarraTop = document.querySelector("#ofertaBarraTop");
      // ofertaBarraTop.setAttribute('style','color:#ffffff; font-size: 18px; text-align:center; line-height: 100%;');
    
      function getRandomArbitrary(min, max) {
          return Math.trunc(Math.random() * (max - min) + min);
      }
      
      function getOfertaTop(country) {
          var nomPais=""; 
          var numero = getRandomArbitrary(10, 20);
          
          for (i = 0; i < paises.length; i++) {
              if (paises[i].codPais === country) {
                  nomPais =''+ '' + paises[i].nombrePais || '';
              }
          }	
        
       return numero+" "+"Clientes"+" "  + "de" +" "+ nomPais + "";
      } 
    
     fetch("https://ipinfo.io/json")
      .then((response) => response.json())
      .then((data) => (ofertaBarraTop.innerHTML =  getOfertaTop(data.country)));  
      

    
      
    //   oferta 2 emprendedor pro

    var ofertaBarraTop2 = document.querySelector("#ofertaBarraTop2");
    // ofertaBarraTop.setAttribute('style','color:#ffffff; font-size: 18px; text-align:center; line-height: 100%;');
  
    function getRandomArbitrary(min, max) {
        return Math.trunc(Math.random() * (max - min) + min);
    }
    
    function getOfertaTop2(country) {
        var nomPais=""; 
        var numero2 = getRandomArbitrary(30, 97);
        
        for (i = 0; i < paises.length; i++) {
            if (paises[i].codPais === country) {
                nomPais =''+ '' + paises[i].nombrePais || '';
            }
        }	
      
     return numero2+" "+"Empresarios y Dueños de Negocio"+" "  + "de" +" "+ nomPais + "";
    } 
  
   fetch("https://ipinfo.io/json")
    .then((response) => response.json())
    .then((data) => (ofertaBarraTop2.innerHTML =  getOfertaTop2(data.country)));   


    // versiones pro

    var ofertaBarraTop3 = document.querySelector("#ofertaBarraTop3");
    // ofertaBarraTop.setAttribute('style','color:#ffffff; font-size: 18px; text-align:center; line-height: 100%;');
  
    function getRandomArbitrary(min, max) {
        return Math.trunc(Math.random() * (max - min) + min);
    }
    
    function getOfertaTop3(country) {
        var nomPais=""; 
        var numero = getRandomArbitrary(2, 5);
        
        for (i = 0; i < paises.length; i++) {
            if (paises[i].codPais === country) {
                nomPais =''+ '' + paises[i].nombrePais || '';
            }
        }	
      
     return numero+" "+"Socios"+" "  + "de" +" "+ nomPais + "";
    } 
  
   fetch("https://ipinfo.io/json")
    .then((response) => response.json())
    .then((data) => (ofertaBarraTop3.innerHTML =  getOfertaTop3(data.country)));  


    var ofertaBarraTop4 = document.querySelector("#ofertaBarraTop4");
    // ofertaBarraTop.setAttribute('style','color:#ffffff; font-size: 18px; text-align:center; line-height: 100%;');
  
    function getRandomArbitrary(min, max) {
        return Math.trunc(Math.random() * (max - min) + min);
    }
    
    function getOfertaTop4(country) {
        var nomPais=""; 
        var numero2 = getRandomArbitrary(47, 97);
        
        for (i = 0; i < paises.length; i++) {
            if (paises[i].codPais === country) {
                nomPais =''+ '' + paises[i].nombrePais || '';
            }
        }	
      
     return numero2+" "+"Emprendedores PRO y Dueños de Negocio"+" "  + "de" +" "+ nomPais + "";
    } 
  
   fetch("https://ipinfo.io/json")
    .then((response) => response.json())
    .then((data) => (ofertaBarraTop4.innerHTML =  getOfertaTop4(data.country)));  
    
  
  
  // codigo para datos dinamicos ejm cupos dinamicos
  
  // Éste es el código que debes copiar y pegar
  // 👇👇👇
  
  /* <h2 id="cuposPorDia"></h2> */
  
  // function cuposPorDia(size) {
  // var cupos="";
  //   switch (new Date().getDay()) {
  //   case 0:
  //     cupos = "5";
  //     break;
  //   case 1:
  //     cupos = "17";
  //     break;
  //   case 2:
  //      cupos = "15";
  //     break;
  //   case 3:
  //     cupos = "13";
  //     break;
  //   case 4:
  //     cupos = "11";
  //     break;
  //   case 5:
  //     cupos = "9";
  //     break;
  //   case 6:
  //     cupos = "7";
  //     break;
  //   default:
  //     cupos = "5";
  // }
  
  // 	return "<center><span style='color: #e71d36; font-size: " + size + "px;'><b>" + cupos + "</b></span></center>";
  // }
  //   document.getElementById("cuposPorDia").innerHTML = cuposPorDia(68);
      
  
  // frases aleatorias
  
  /* <h3 id="frasesPresuasivas"></h3> */
  
  
  // function frasesAleatorias() {
  // var nro=0;
  // var frases = new Array();
  // 	frases[0] = "<h3 style='text-align: center;'><em><strong><span style='color: #084c61;'>¡Aprende a tener hasta 10 ventas diarias paso a paso </span><span style='color: #db3a34;'>en menos de 15 días</span><span style='color: #084c61;'>!</span></strong></em></h3>";
  // 	frases[1] = "<h3 style='text-align: center;'><em><strong><span style='color: #084c61;'>¡Descubre cómo miles de mujeres están </span><span style='color: #db3a34;'><br>cumpliendo sus sueños </span><span style='color: #084c61;'>con éste fabuloso método!</span></strong></em></h3>";
  //   	frases[2] = "<h3 style='text-align: center;'><em><strong><span style='color: #084c61;'>¡Inscríbete hoy y recibe hasta </span><span style='color: #db3a34;'>4 ebooks complementarios </span><span style='color: #084c61;'>gratis!</span></strong></em></h3>";
  
  //     nro = Math.floor(Math.random() * (frases.length - 0) + 0);//obtienes el valor aleatorio siempre acorde al tamaño de tu array
  
  // 	return frases[nro].toUpperCase();
  // }
  //      document.getElementById("frasesPresuasivas").innerHTML = frasesAleatorias();
   
  // precios aleatorios
  
  
  // <h2 id="precioImg"></h2>
  
  
  //   var ofertaImg = document.querySelector("#precioImg");
  //   precioImg.setAttribute('style','text-align:center;');
    
  //   function getCountry(country) {
  //     var ima="";
  //     var path = "";
      
  //     if(country=="AR"){
  // ima="https://tudominio.com/wp-content/uploads/pc-ars.png";
  //     }else if(country=="CO"){
  // ima="https://tudominio.com/wp-content/uploads/pc-cop.png";
  //     }else if(country=="PE"){
  // ima="https://tudominio.com/wp-content/uploads/pc-sol.png";
  //     }else if(country=="CL"){
  // ima="https://tudominio.com/wp-content/uploads/pc-chil.png";
  //     }else if(country=="ES"){
  // ima="https://tudominio.com/wp-content/uploads/pc-eur.png";
  //     }else if(country=="MX"){
  // ima="https://tudominio.com/wp-content/uploads/pc-mex.png";
  //     }else{
  // ima="https://tudominio.com/wp-content/uploads/pc-usd.png";
  //     } 
        
  //     path='<img src="' + ima + '">';
      
  //     return path;
  // 	}
    
  //    fetch("https://ipinfo.io/json")
  //     .then((response) => response.json())
  //     .then((data) => (precioImg.innerHTML =  getCountry(data.country)));


  $('#containers2aa').insertBefore('#menu-container-C0');
  $('#masvendidos1a').insertBefore('#menu-container-C0');

  $('#containers3a').insertBefore('#menu-container-C3');
  $('#masvendidos3a').insertBefore('#menu-container-C3');
  
  $('#containers3b').insertBefore('#menu-container-C4');
  $('#masvendidos3b').insertBefore('#menu-container-C4');
        
  $('#containers2a').insertBefore('#menu-container-C1');
  $('#masvendidos1').insertBefore('#menu-container-C1');
  
  $('#containers2b').insertBefore('#menu-container-C2');
  $('#masvendidos').insertBefore('#menu-container-C2');
  

  


    $("#owlsocial").owlCarousel({
         navigation : true, // Show next and prev buttons
         slideSpeed : 300,
         paginationSpeed : 400,
         singleItem:true,
         // Navigation
         navigationText : ["<",">"],
         rewindNav : true,
         scrollPerPage : true,
         //Pagination
         pagination : true,
         paginationNumbers: false,
         responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          }
          
      }
     });


    //  code counter

    const getRemainingTime = deadline => {
      let now = new Date(),
          remainTime = (new Date(deadline) - now + 1000) / 1000,
          remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
          remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
          remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
          remainDays = Math.floor(remainTime / (3600 * 24));
    
      return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime
      }
    };
    
    const countdown = (deadline,elem,finalMessage) => {
      const el = document.getElementById(elem);
    
      const timerUpdate = setInterval( () => {
        let t = getRemainingTime(deadline);
        el.innerHTML = ` 
        
        <span class="titucount">Esta oferta termina en:</span>
        <a class="countf">

        <p class="pcount">  <span> ${t.remainDays}</span> Días</p>
        <p class="pcount">  <span> ${t.remainHours}</span> Horas</p>
        <p class="pcount">  <span> ${t.remainMinutes}</span> Mins.</p>
        <p class="pcount">  <span> ${t.remainSeconds}</span> Seg.</p>

      
        
    </a>`;
    
        if(t.remainTime <= 1) {
          clearInterval(timerUpdate);
          el.innerHTML = finalMessage;
        }
    
      }, 1000)
    };
    
    countdown('May 30 2024 23:59:59 GMT-0500', 'clock', 'Hoy estamos de oferta aprovecha descuentos<br> empresariales en todos nuestros planes.');
 
    //contenedor más info por producto.
    const preguntas = document.querySelectorAll('.contenedor-pregunta');
    preguntas.forEach((pregunta) => {
        pregunta.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('activa');

         
            const respuesta = pregunta.querySelector('.features');
            const alturaRealRespuesta = respuesta.scrollHeight;
        
    
            if(!respuesta.style.maxHeight){
                // Si esta vacio el maxHeight entonces ponemos un valor.
                respuesta.style.maxHeight = alturaRealRespuesta + 'px';
               
             
                // $('#masvendidos3b').insertBefore('#menu-container-C4');
              
            } else {
                respuesta.style.maxHeight = null;
            }

            // [Opcional] Reiniciamos las demas preguntas
            preguntas.forEach((elemento) => {
                // Solamente queremos ejecutar el codigo para las preguntas que no 
                // sean la pregunta a la que le dimos click.
                if(pregunta !== elemento){
                    elemento.classList.remove('activa');
                    elemento.querySelector('.features').style.maxHeight = null;
                }
            });
     
        });
    });


    // codigo para mostrar el modaldemo

    // $(".btn25").on("click", function() {
    //     $(this).addClass("visible");
    //   });
      
    
 let p = document.getElementById("btn25");

 
 // Encuentra el elemento "p" en el sitio
     p.onclick = muestraDemo;
 
 
   function muestraDemo() {
     $('#exit2').addClass('visible');
   
 
//    if(  $('#close2').bind('click')){
 
//      $('.exit-intent-popup2').toggleClass('active2');
     
  //}
}
 
 
$('#close2').click(function(){
    $('#exit2').toggleClass('visible');
  });