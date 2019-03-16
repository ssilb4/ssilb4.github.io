// Compiled by ClojureScript 1.10.439 {}
goog.provide('reitit.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
/**
 * Applies a function to every value of a map, updates the value if not nil.
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.maybe_map_values = (function reitit$impl$maybe_map_values(f,coll){
return cljs.core.reduce_kv.call(null,(function (coll__$1,k,v){
var temp__5722__auto__ = f.call(null,v);
if((temp__5722__auto__ == null)){
return coll__$1;
} else {
var v_SINGLEQUOTE_ = temp__5722__auto__;
return cljs.core.assoc.call(null,coll__$1,k,v_SINGLEQUOTE_);
}
}),coll,coll);
});
reitit.impl.wild_QMARK_ = (function reitit$impl$wild_QMARK_(s){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["*",null,":",null], null), null),cljs.core.first.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
reitit.impl.catch_all_QMARK_ = (function reitit$impl$catch_all_QMARK_(s){
return cljs.core._EQ_.call(null,"*",cljs.core.first.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
reitit.impl.wild_param = (function reitit$impl$wild_param(s){
var ss = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core._EQ_.call(null,":",cljs.core.first.call(null,ss))){
return cljs.core.keyword.call(null,cljs.core.subs.call(null,ss,(1)));
} else {
return null;
}
});
reitit.impl.catch_all_param = (function reitit$impl$catch_all_param(s){
var ss = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core._EQ_.call(null,"*",cljs.core.first.call(null,ss))){
return cljs.core.keyword.call(null,cljs.core.subs.call(null,ss,(1)));
} else {
return null;
}
});
reitit.impl.wild_or_catch_all_param_QMARK_ = (function reitit$impl$wild_or_catch_all_param_QMARK_(x){
return cljs.core.boolean$.call(null,(function (){var or__4047__auto__ = reitit.impl.wild_param.call(null,x);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.impl.catch_all_param.call(null,x);
}
})());
});
reitit.impl.segments = (function reitit$impl$segments(path){
return path.split(/\//,(666));
});
reitit.impl.contains_wilds_QMARK_ = (function reitit$impl$contains_wilds_QMARK_(path){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,reitit.impl.wild_or_catch_all_param_QMARK_,reitit.impl.segments.call(null,path)));
});
reitit.impl.parse_path_token = (function reitit$impl$parse_path_token(out,string){
var pred__26844 = cljs.core.re_matches;
var expr__26845 = string;
var temp__5718__auto__ = pred__26844.call(null,/^:(.+)$/,expr__26845);
if(cljs.core.truth_(temp__5718__auto__)){
var p__4396__auto__ = temp__5718__auto__;
return ((function (p__4396__auto__,temp__5718__auto__,pred__26844,expr__26845){
return (function (p__26847){
var vec__26848 = p__26847;
var _ = cljs.core.nth.call(null,vec__26848,(0),null);
var token = cljs.core.nth.call(null,vec__26848,(1),null);
var key = cljs.core.keyword.call(null,token);
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928),key], null),"([^/]+)");
});})(p__4396__auto__,temp__5718__auto__,pred__26844,expr__26845))
.call(null,p__4396__auto__);
} else {
var temp__5718__auto____$1 = pred__26844.call(null,/^\*(.*)$/,expr__26845);
if(cljs.core.truth_(temp__5718__auto____$1)){
var p__4396__auto__ = temp__5718__auto____$1;
return ((function (p__4396__auto__,temp__5718__auto____$1,temp__5718__auto__,pred__26844,expr__26845){
return (function (p__26851){
var vec__26852 = p__26851;
var _ = cljs.core.nth.call(null,vec__26852,(0),null);
var token = cljs.core.nth.call(null,vec__26852,(1),null);
var key = cljs.core.keyword.call(null,token);
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928),key], null),"(.*)");
});})(p__4396__auto__,temp__5718__auto____$1,temp__5718__auto__,pred__26844,expr__26845))
.call(null,p__4396__auto__);
} else {
return cljs.core.update_in.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894)], null),cljs.core.conj,string);
}
}
});
reitit.impl.parse_path = (function reitit$impl$parse_path(var_args){
var G__26856 = arguments.length;
switch (G__26856) {
case 1:
return reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return reitit.impl.parse_path.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-params","path-params",-48130597),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928),cljs.core.PersistentArrayMap.EMPTY], null),pattern);
});

reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$2 = (function (accumulated_info,pattern){
var temp__5718__auto__ = cljs.core.re_matches.call(null,/\/(.*)/,pattern);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var vec__26857 = m;
var _ = cljs.core.nth.call(null,vec__26857,(0),null);
var path = cljs.core.nth.call(null,vec__26857,(1),null);
return cljs.core.reduce.call(null,reitit.impl.parse_path_token,accumulated_info,clojure.string.split.call(null,path,/\//));
} else {
throw cljs.core.ex_info.call(null,"Routes must start from the root, so they must begin with a '/'",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern], null));
}
});

reitit.impl.parse_path.cljs$lang$maxFixedArity = 2;

reitit.impl.re_quote = (function reitit$impl$re_quote(x){
return clojure.string.replace.call(null,x,/([.?*+^$[\\]\\\\(){}|-])/,"\\$1");
});
reitit.impl.path_regex = (function reitit$impl$path_regex(p__26862){
var map__26863 = p__26862;
var map__26863__$1 = (((((!((map__26863 == null))))?(((((map__26863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26863):map__26863);
var route = map__26863__$1;
var path_parts = cljs.core.get.call(null,map__26863__$1,new cljs.core.Keyword(null,"path-parts","path-parts",945822894));
var path_constraints = cljs.core.get.call(null,map__26863__$1,new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928));
var vec__26865 = path_parts;
var seq__26866 = cljs.core.seq.call(null,vec__26865);
var first__26867 = cljs.core.first.call(null,seq__26866);
var seq__26866__$1 = cljs.core.next.call(null,seq__26866);
var pp = first__26867;
var pps = seq__26866__$1;
var path_parts__$1 = ((((cljs.core.seq.call(null,pps)) && (typeof pp === 'string') && (cljs.core.empty_QMARK_.call(null,pp))))?pps:path_parts);
return cljs.core.re_pattern.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interleave.call(null,cljs.core.repeat.call(null,"/"),cljs.core.map.call(null,((function (vec__26865,seq__26866,first__26867,seq__26866__$1,pp,pps,path_parts__$1,map__26863,map__26863__$1,route,path_parts,path_constraints){
return (function (p1__26861_SHARP_){
var or__4047__auto__ = cljs.core.get.call(null,path_constraints,p1__26861_SHARP_);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.impl.re_quote.call(null,p1__26861_SHARP_);
}
});})(vec__26865,seq__26866,first__26867,seq__26866__$1,pp,pps,path_parts__$1,map__26863,map__26863__$1,route,path_parts,path_constraints))
,path_parts__$1))));
});
reitit.impl.path_matcher = (function reitit$impl$path_matcher(route){
var map__26868 = route;
var map__26868__$1 = (((((!((map__26868 == null))))?(((((map__26868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26868):map__26868);
var path_re = cljs.core.get.call(null,map__26868__$1,new cljs.core.Keyword(null,"path-re","path-re",-1615269971));
var path_params = cljs.core.get.call(null,map__26868__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
return ((function (map__26868,map__26868__$1,path_re,path_params){
return (function (path){
var temp__5720__auto__ = cljs.core.re_matches.call(null,path_re,path);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.zipmap.call(null,path_params,cljs.core.rest.call(null,m));
} else {
return null;
}
});
;})(map__26868,map__26868__$1,path_re,path_params))
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.impl.Route = (function (path,matcher,path_parts,path_params,data,result,__meta,__extmap,__hash){
this.path = path;
this.matcher = matcher;
this.path_parts = path_parts;
this.path_params = path_params;
this.data = data;
this.result = result;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k26871,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__26875 = k26871;
var G__26875__$1 = (((G__26875 instanceof cljs.core.Keyword))?G__26875.fqn:null);
switch (G__26875__$1) {
case "path":
return self__.path;

break;
case "matcher":
return self__.matcher;

break;
case "path-parts":
return self__.path_parts;

break;
case "path-params":
return self__.path_params;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26871,else__4304__auto__);

}
});

reitit.impl.Route.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__26876){
var vec__26877 = p__26876;
var k__4324__auto__ = cljs.core.nth.call(null,vec__26877,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__26877,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.impl.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#reitit.impl.Route{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matcher","matcher",-452768995),self__.matcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-parts","path-parts",945822894),self__.path_parts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null))], null),self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26870){
var self__ = this;
var G__26870__$1 = this;
return (new cljs.core.RecordIter((0),G__26870__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"matcher","matcher",-452768995),new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.impl.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

reitit.impl.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.impl.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (573096325 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.impl.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26872,other26873){
var self__ = this;
var this26872__$1 = this;
return (((!((other26873 == null)))) && ((this26872__$1.constructor === other26873.constructor)) && (cljs.core._EQ_.call(null,this26872__$1.path,other26873.path)) && (cljs.core._EQ_.call(null,this26872__$1.matcher,other26873.matcher)) && (cljs.core._EQ_.call(null,this26872__$1.path_parts,other26873.path_parts)) && (cljs.core._EQ_.call(null,this26872__$1.path_params,other26873.path_params)) && (cljs.core._EQ_.call(null,this26872__$1.data,other26873.data)) && (cljs.core._EQ_.call(null,this26872__$1.result,other26873.result)) && (cljs.core._EQ_.call(null,this26872__$1.__extmap,other26873.__extmap)));
});

reitit.impl.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"matcher","matcher",-452768995),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

reitit.impl.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__26870){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__26880 = cljs.core.keyword_identical_QMARK_;
var expr__26881 = k__4309__auto__;
if(cljs.core.truth_(pred__26880.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__26881))){
return (new reitit.impl.Route(G__26870,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26880.call(null,new cljs.core.Keyword(null,"matcher","matcher",-452768995),expr__26881))){
return (new reitit.impl.Route(self__.path,G__26870,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26880.call(null,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),expr__26881))){
return (new reitit.impl.Route(self__.path,self__.matcher,G__26870,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26880.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__26881))){
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,G__26870,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26880.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__26881))){
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,G__26870,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26880.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__26881))){
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,G__26870,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__26870),null));
}
}
}
}
}
}
});

reitit.impl.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"matcher","matcher",-452768995),self__.matcher,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-parts","path-parts",945822894),self__.path_parts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null))], null),self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__26870){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,G__26870,self__.__extmap,self__.__hash));
});

reitit.impl.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.impl.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"path-parts","path-parts",-1708612875,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null)], null);
});

reitit.impl.Route.cljs$lang$type = true;

reitit.impl.Route.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.impl/Route",null,(1),null));
});

reitit.impl.Route.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"reitit.impl/Route");
});

/**
 * Positional factory function for reitit.impl/Route.
 */
reitit.impl.__GT_Route = (function reitit$impl$__GT_Route(path,matcher,path_parts,path_params,data,result){
return (new reitit.impl.Route(path,matcher,path_parts,path_params,data,result,null,null,null));
});

/**
 * Factory function for reitit.impl/Route, taking a map of keywords to field values.
 */
reitit.impl.map__GT_Route = (function reitit$impl$map__GT_Route(G__26874){
var extmap__4340__auto__ = (function (){var G__26883 = cljs.core.dissoc.call(null,G__26874,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"matcher","matcher",-452768995),new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core.record_QMARK_.call(null,G__26874)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__26883);
} else {
return G__26883;
}
})();
return (new reitit.impl.Route(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__26874),new cljs.core.Keyword(null,"matcher","matcher",-452768995).cljs$core$IFn$_invoke$arity$1(G__26874),new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(G__26874),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__26874),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__26874),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__26874),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

reitit.impl.create = (function reitit$impl$create(p__26886){
var vec__26887 = p__26886;
var path = cljs.core.nth.call(null,vec__26887,(0),null);
var data = cljs.core.nth.call(null,vec__26887,(1),null);
var result = cljs.core.nth.call(null,vec__26887,(2),null);
var path__$1 = path;
var $ = reitit.impl.parse_path.call(null,path__$1);
var $__$1 = cljs.core.assoc.call(null,$,new cljs.core.Keyword(null,"path-re","path-re",-1615269971),reitit.impl.path_regex.call(null,$));
var $__$2 = cljs.core.merge.call(null,$__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"matcher","matcher",-452768995),((reitit.impl.contains_wilds_QMARK_.call(null,path__$1))?reitit.impl.path_matcher.call(null,$__$1):((function ($,$__$1,path__$1,vec__26887,path,data,result){
return (function (p1__26885_SHARP_){
if(cljs.core._EQ_.call(null,path__$1,p1__26885_SHARP_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
});})($,$__$1,path__$1,vec__26887,path,data,result))
),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
var $__$3 = cljs.core.dissoc.call(null,$__$2,new cljs.core.Keyword(null,"path-re","path-re",-1615269971),new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928));
var $__$4 = cljs.core.update.call(null,$__$3,new cljs.core.Keyword(null,"path-params","path-params",-48130597),cljs.core.set);
return reitit.impl.map__GT_Route.call(null,$__$4);
});
reitit.impl.wild_route_QMARK_ = (function reitit$impl$wild_route_QMARK_(p__26890){
var vec__26891 = p__26890;
var path = cljs.core.nth.call(null,vec__26891,(0),null);
return reitit.impl.contains_wilds_QMARK_.call(null,path);
});
reitit.impl.conflicting_routes_QMARK_ = (function reitit$impl$conflicting_routes_QMARK_(p__26894,p__26895){
var vec__26896 = p__26894;
var p1 = cljs.core.nth.call(null,vec__26896,(0),null);
var vec__26899 = p__26895;
var p2 = cljs.core.nth.call(null,vec__26899,(0),null);
var G__26908 = reitit.impl.segments.call(null,p1);
var vec__26910 = G__26908;
var seq__26911 = cljs.core.seq.call(null,vec__26910);
var first__26912 = cljs.core.first.call(null,seq__26911);
var seq__26911__$1 = cljs.core.next.call(null,seq__26911);
var s1 = first__26912;
var ss1 = seq__26911__$1;
var G__26909 = reitit.impl.segments.call(null,p2);
var vec__26913 = G__26909;
var seq__26914 = cljs.core.seq.call(null,vec__26913);
var first__26915 = cljs.core.first.call(null,seq__26914);
var seq__26914__$1 = cljs.core.next.call(null,seq__26914);
var s2 = first__26915;
var ss2 = seq__26914__$1;
var G__26908__$1 = G__26908;
var G__26909__$1 = G__26909;
while(true){
var vec__26916 = G__26908__$1;
var seq__26917 = cljs.core.seq.call(null,vec__26916);
var first__26918 = cljs.core.first.call(null,seq__26917);
var seq__26917__$1 = cljs.core.next.call(null,seq__26917);
var s1__$1 = first__26918;
var ss1__$1 = seq__26917__$1;
var vec__26919 = G__26909__$1;
var seq__26920 = cljs.core.seq.call(null,vec__26919);
var first__26921 = cljs.core.first.call(null,seq__26920);
var seq__26920__$1 = cljs.core.next.call(null,seq__26920);
var s2__$1 = first__26921;
var ss2__$1 = seq__26920__$1;
if(cljs.core._EQ_.call(null,s1__$1,s2__$1,null)){
return true;
} else {
if((((s1__$1 == null)) || ((s2__$1 == null)))){
return false;
} else {
if(((reitit.impl.catch_all_QMARK_.call(null,s1__$1)) || (reitit.impl.catch_all_QMARK_.call(null,s2__$1)))){
return true;
} else {
if(((reitit.impl.wild_QMARK_.call(null,s1__$1)) || (reitit.impl.wild_QMARK_.call(null,s2__$1)))){
var G__26922 = ss1__$1;
var G__26923 = ss2__$1;
G__26908__$1 = G__26922;
G__26909__$1 = G__26923;
continue;
} else {
if(cljs.core.not_EQ_.call(null,s1__$1,s2__$1)){
return false;
} else {
var G__26924 = ss1__$1;
var G__26925 = ss2__$1;
G__26908__$1 = G__26924;
G__26909__$1 = G__26925;
continue;

}
}
}
}
}
break;
}
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
var temp__5718__auto__ = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route);
if(cljs.core.truth_(temp__5718__auto__)){
var required = temp__5718__auto__;
if(cljs.core.every_QMARK_.call(null,((function (required,temp__5718__auto__){
return (function (p1__26926_SHARP_){
return cljs.core.contains_QMARK_.call(null,path_params,p1__26926_SHARP_);
});})(required,temp__5718__auto__))
,required)){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"/",cljs.core.map.call(null,((function (required,temp__5718__auto__){
return (function (p1__26927_SHARP_){
return cljs.core.get.call(null,(function (){var or__4047__auto__ = path_params;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p1__26927_SHARP_,p1__26927_SHARP_);
});})(required,temp__5718__auto__))
,new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(route))))].join('');
} else {
return null;
}
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
if(cljs.core.every_QMARK_.call(null,(function (p1__26928_SHARP_){
return cljs.core.contains_QMARK_.call(null,path_params,p1__26928_SHARP_);
}),required)){
return null;
} else {
var defined = cljs.core.set.call(null,cljs.core.keys.call(null,path_params));
var missing = clojure.set.difference.call(null,required,defined);
throw cljs.core.ex_info.call(null,["missing path-params for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"required","required",1807647006),required], null));
}
});
reitit.impl.fast_assoc = (function reitit$impl$fast_assoc(a,k,v){
return cljs.core.assoc.call(null,a,k,v);
});
reitit.impl.fast_map = (function reitit$impl$fast_map(m){
return m;
});
reitit.impl.fast_get = (function reitit$impl$fast_get(m,k){
return m.call(null,k);
});
reitit.impl.strip_nils = (function reitit$impl$strip_nils(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),m));
});
reitit.impl.url_encode = (function reitit$impl$url_encode(s){
if(cljs.core.truth_(s)){
return encodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.maybe_url_decode = (function reitit$impl$maybe_url_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.url_decode = (function reitit$impl$url_decode(s){
var or__4047__auto__ = reitit.impl.maybe_url_decode.call(null,s);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return s;
}
});
reitit.impl.form_encode = (function reitit$impl$form_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,encodeURIComponent(s),"%20","+");
} else {
return null;
}
});
reitit.impl.form_decode = (function reitit$impl$form_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(clojure.string.replace.call(null,s,"+"," "));
} else {
return null;
}
});
/**
 * URL-decodes maps and vectors
 */
reitit.impl.url_decode_coll = (function reitit$impl$url_decode_coll(coll){
return reitit.impl.maybe_map_values.call(null,reitit.impl.maybe_url_decode,coll);
});

/**
 * @interface
 */
reitit.impl.IntoString = function(){};

reitit.impl.into_string = (function reitit$impl$into_string(_){
if((((!((_ == null)))) && ((!((_.reitit$impl$IntoString$into_string$arity$1 == null)))))){
return _.reitit$impl$IntoString$into_string$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (reitit.impl.into_string[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (reitit.impl.into_string["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IntoString.into-string",_);
}
}
}
});

goog.object.set(reitit.impl.IntoString,"string",true);

goog.object.set(reitit.impl.into_string,"string",(function (this$){
return this$;
}));

cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace.call(null,this$__$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ns)?"/":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,this$__$1))].join('');
});

goog.object.set(reitit.impl.IntoString,"boolean",true);

goog.object.set(reitit.impl.into_string,"boolean",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"number",true);

goog.object.set(reitit.impl.into_string,"number",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"object",true);

goog.object.set(reitit.impl.into_string,"object",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"null",true);

goog.object.set(reitit.impl.into_string,"null",(function (_){
return null;
}));
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values.call(null,(function (p1__26930_SHARP_){
return reitit.impl.url_encode.call(null,reitit.impl.into_string.call(null,p1__26930_SHARP_));
}),params);
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__26931){
var vec__26932 = p__26931;
var k = cljs.core.nth.call(null,vec__26932,(0),null);
var v = cljs.core.nth.call(null,vec__26932,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode.call(null,reitit.impl.into_string.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode.call(null,reitit.impl.into_string.call(null,v)))].join('');
}),params));
});
var ret__4684__auto___26941 = (function (){
reitit.impl.goog_extend = (function reitit$impl$goog_extend(var_args){
var args__4647__auto__ = [];
var len__4641__auto___26942 = arguments.length;
var i__4642__auto___26943 = (0);
while(true){
if((i__4642__auto___26943 < len__4641__auto___26942)){
args__4647__auto__.push((arguments[i__4642__auto___26943]));

var G__26944 = (i__4642__auto___26943 + (1));
i__4642__auto___26943 = G__26944;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((5) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((5)),(0),null)):null);
return reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4648__auto__);
});

reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,base_type,ctor,methods$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),ctor))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog","inherits","goog/inherits",1191617838,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,base_type,null,(1),null))))),null,(1),null)),cljs.core.map.call(null,(function (method){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("reitit.impl","-prototype","reitit.impl/-prototype",-650268084,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,method))].join('')),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),cljs.core.rest.call(null,method)))),null,(1),null)))));
}),methods$))));
});

reitit.impl.goog_extend.cljs$lang$maxFixedArity = (5);

/** @this {Function} */
reitit.impl.goog_extend.cljs$lang$applyTo = (function (seq26935){
var G__26936 = cljs.core.first.call(null,seq26935);
var seq26935__$1 = cljs.core.next.call(null,seq26935);
var G__26937 = cljs.core.first.call(null,seq26935__$1);
var seq26935__$2 = cljs.core.next.call(null,seq26935__$1);
var G__26938 = cljs.core.first.call(null,seq26935__$2);
var seq26935__$3 = cljs.core.next.call(null,seq26935__$2);
var G__26939 = cljs.core.first.call(null,seq26935__$3);
var seq26935__$4 = cljs.core.next.call(null,seq26935__$3);
var G__26940 = cljs.core.first.call(null,seq26935__$4);
var seq26935__$5 = cljs.core.next.call(null,seq26935__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26936,G__26937,G__26938,G__26939,G__26940,seq26935__$5);
});

return null;
})()
;
reitit.impl.goog_extend.cljs$lang$macro = true;


//# sourceMappingURL=impl.js.map?rel=1552709039640
