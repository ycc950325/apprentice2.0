/**
 * Created by Administrator on 2016/9/12.
 */
$('#exampleInputFile').click(function(){
   _fns.uploadFile($('#upload'),function(f){
       console.log('before:',f);
   },function(f){
       console.log('progress:',f);
       $('#wancheng').css('width', f.percent +'%');
       $('#wancheng').html(f.percent +'%');
   },function(f){
       console.log('success:',f);
       $('#wenjie').html(f.url);
       $('#wenjie').attr('href', f.url);
   });
});