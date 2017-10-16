<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use Illuminate\Http\Request;
use App\User;
use App\Item;
use App\Place;
use App\Data;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
//Route::get('/', function () {
//    return view('welcome');
//});

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');







Route::middleware(['auth'])->group(function () {



    Route::view('yj/{yj?}','dsj')->where('yj','[\/\w\.-]*')->name('yj');
   // Route::view('/yj','dsj')->name('yj');



    Route::get('/datas', function (){

        return Data::with(['user:id,name','item:id,item','place:id,place'])
            ->where('user_id', '=', Auth::id())
            ->orderBy('updated_at','desc')
            //->paginate(15);
            ->get();
    });

    Route::get('/alldatas', function (){

        return Data::with(['user:id,name','item:id,item','place:id,place'])
            ->orderBy('updated_at','desc')
            //->paginate(15);
            ->get();
    });

    //place route


    Route::get('/place',function (){
        $places = Place::all();
        return $places;
    });

    Route::post('/place',function (Request $request){
        $places = new Place;

        $places->place = $request->place;

        if ( $places->save()){
            return "地保存成功";
        }



    });


//item
    Route::get('/item',function (){
        $items = Item::all();
        return $items;
    });


//data route
    Route::post('/data',function (Request $request){
        $data = new Data;
        $place = new Place;
        $item = new Item;
        $user = new User;

        $user = $user->find(Auth::id());
        $place = $place->find($request->placeid);
        $item = $item->find($request->itemid);

        $data->time = $request->time;
        $data->comment = $request->comment;
        $data->online = $request->online;
        $data->measure = $request->measure;
        $data->place()->associate($place);
        $data->item()->associate($item);
        $data->user()->associate($user);

        if ($data->save()){
            return '数据保存成功！';
        }


    });


});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

