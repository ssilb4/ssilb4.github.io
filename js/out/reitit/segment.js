// Compiled by ClojureScript 1.10.439 {}
goog.provide('reitit.segment');
goog.require('cljs.core');
goog.require('reitit.impl');
goog.require('clojure.string');

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
reitit.segment.Match = (function (data,path_params,__meta,__extmap,__hash){
this.data = data;
this.path_params = path_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.segment.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

reitit.segment.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k27118,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__27122 = k27118;
var G__27122__$1 = (((G__27122 instanceof cljs.core.Keyword))?G__27122.fqn:null);
switch (G__27122__$1) {
case "data":
return self__.data;

break;
case "path-params":
return self__.path_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27118,else__4304__auto__);

}
});

reitit.segment.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__27123){
var vec__27124 = p__27123;
var k__4324__auto__ = cljs.core.nth.call(null,vec__27124,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__27124,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.segment.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#reitit.segment.Match{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null))], null),self__.__extmap));
});

reitit.segment.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27117){
var self__ = this;
var G__27117__$1 = this;
return (new cljs.core.RecordIter((0),G__27117__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.segment.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

reitit.segment.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.segment.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

reitit.segment.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-129766334 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.segment.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27119,other27120){
var self__ = this;
var this27119__$1 = this;
return (((!((other27120 == null)))) && ((this27119__$1.constructor === other27120.constructor)) && (cljs.core._EQ_.call(null,this27119__$1.data,other27120.data)) && (cljs.core._EQ_.call(null,this27119__$1.path_params,other27120.path_params)) && (cljs.core._EQ_.call(null,this27119__$1.__extmap,other27120.__extmap)));
});

reitit.segment.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

reitit.segment.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__27117){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__27127 = cljs.core.keyword_identical_QMARK_;
var expr__27128 = k__4309__auto__;
if(cljs.core.truth_(pred__27127.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__27128))){
return (new reitit.segment.Match(G__27117,self__.path_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27127.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__27128))){
return (new reitit.segment.Match(self__.data,G__27117,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__27117),null));
}
}
});

reitit.segment.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null))], null),self__.__extmap));
});

reitit.segment.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__27117){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.segment.Match(self__.data,self__.path_params,G__27117,self__.__extmap,self__.__hash));
});

reitit.segment.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.segment.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null)], null);
});

reitit.segment.Match.cljs$lang$type = true;

reitit.segment.Match.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.segment/Match",null,(1),null));
});

reitit.segment.Match.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"reitit.segment/Match");
});

/**
 * Positional factory function for reitit.segment/Match.
 */
reitit.segment.__GT_Match = (function reitit$segment$__GT_Match(data,path_params){
return (new reitit.segment.Match(data,path_params,null,null,null));
});

/**
 * Factory function for reitit.segment/Match, taking a map of keywords to field values.
 */
reitit.segment.map__GT_Match = (function reitit$segment$map__GT_Match(G__27121){
var extmap__4340__auto__ = (function (){var G__27130 = cljs.core.dissoc.call(null,G__27121,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"path-params","path-params",-48130597));
if(cljs.core.record_QMARK_.call(null,G__27121)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27130);
} else {
return G__27130;
}
})();
return (new reitit.segment.Match(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__27121),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__27121),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});


/**
 * @interface
 */
reitit.segment.Segment = function(){};

reitit.segment._insert = (function reitit$segment$_insert(this$,ps,data){
if((((!((this$ == null)))) && ((!((this$.reitit$segment$Segment$_insert$arity$3 == null)))))){
return this$.reitit$segment$Segment$_insert$arity$3(this$,ps,data);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.segment._insert[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,ps,data);
} else {
var m__4348__auto____$1 = (reitit.segment._insert["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,ps,data);
} else {
throw cljs.core.missing_protocol.call(null,"Segment.-insert",this$);
}
}
}
});

reitit.segment._lookup = (function reitit$segment$_lookup(this$,ps,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$segment$Segment$_lookup$arity$3 == null)))))){
return this$.reitit$segment$Segment$_lookup$arity$3(this$,ps,path_params);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.segment._lookup[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,ps,path_params);
} else {
var m__4348__auto____$1 = (reitit.segment._lookup["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,ps,path_params);
} else {
throw cljs.core.missing_protocol.call(null,"Segment.-lookup",this$);
}
}
}
});

goog.object.set(reitit.segment.Segment,"null",true);

goog.object.set(reitit.segment._insert,"null",(function (_,___$1,___$2){
return null;
}));

goog.object.set(reitit.segment._lookup,"null",(function (_,___$1,___$2){
return null;
}));
reitit.segment._catch_all = (function reitit$segment$_catch_all(children,catch_all,path_params,p,ps){
return reitit.segment._lookup.call(null,reitit.impl.fast_get.call(null,children,catch_all),null,cljs.core.assoc.call(null,path_params,catch_all,clojure.string.join.call(null,"/",cljs.core.cons.call(null,p,ps))));
});
reitit.segment.segment = (function reitit$segment$segment(var_args){
var G__27135 = arguments.length;
switch (G__27135) {
case 0:
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.segment.segment.cljs$core$IFn$_invoke$arity$0 = (function (){
return reitit.segment.segment.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,null);
});

reitit.segment.segment.cljs$core$IFn$_invoke$arity$4 = (function (children,wilds,catch_all,match){
var children_SINGLEQUOTE_ = reitit.impl.fast_map.call(null,children);
var wilds_QMARK_ = cljs.core.seq.call(null,wilds);
if((typeof reitit !== 'undefined') && (typeof reitit.segment !== 'undefined') && (typeof reitit.segment.t_reitit$segment27136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.segment.Segment}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.segment.t_reitit$segment27136 = (function (children,wilds,catch_all,match,children_SINGLEQUOTE_,wilds_QMARK_,meta27137){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.match = match;
this.children_SINGLEQUOTE_ = children_SINGLEQUOTE_;
this.wilds_QMARK_ = wilds_QMARK_;
this.meta27137 = meta27137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.segment.t_reitit$segment27136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (_27138,meta27137__$1){
var self__ = this;
var _27138__$1 = this;
return (new reitit.segment.t_reitit$segment27136(self__.children,self__.wilds,self__.catch_all,self__.match,self__.children_SINGLEQUOTE_,self__.wilds_QMARK_,meta27137__$1));
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

reitit.segment.t_reitit$segment27136.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (_27138){
var self__ = this;
var _27138__$1 = this;
return self__.meta27137;
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

reitit.segment.t_reitit$segment27136.prototype.reitit$segment$Segment$ = cljs.core.PROTOCOL_SENTINEL;

reitit.segment.t_reitit$segment27136.prototype.reitit$segment$Segment$_insert$arity$3 = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (_,p__27139,d){
var self__ = this;
var vec__27140 = p__27139;
var seq__27141 = cljs.core.seq.call(null,vec__27140);
var first__27142 = cljs.core.first.call(null,seq__27141);
var seq__27141__$1 = cljs.core.next.call(null,seq__27141);
var p = first__27142;
var ps = seq__27141__$1;
var ___$1 = this;
if(cljs.core.not.call(null,p)){
return reitit.segment.segment.call(null,self__.children,self__.wilds,self__.catch_all,d);
} else {
var vec__27143 = cljs.core.juxt.call(null,reitit.impl.wild_param,reitit.impl.catch_all_param).call(null,p);
var w = cljs.core.nth.call(null,vec__27143,(0),null);
var c = cljs.core.nth.call(null,vec__27143,(1),null);
var wilds__$1 = (cljs.core.truth_(w)?cljs.core.conj.call(null,self__.wilds,w):self__.wilds);
var catch_all__$1 = (function (){var or__4047__auto__ = c;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return self__.catch_all;
}
})();
var children__$1 = cljs.core.update.call(null,self__.children,(function (){var or__4047__auto__ = w;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = c;
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return p;
}
}
})(),((function (vec__27143,w,c,wilds__$1,catch_all__$1,___$1,vec__27140,seq__27141,first__27142,seq__27141__$1,p,ps,children_SINGLEQUOTE_,wilds_QMARK_){
return (function (p1__27132_SHARP_){
return reitit.segment._insert.call(null,(function (){var or__4047__auto__ = p1__27132_SHARP_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.segment.segment.call(null);
}
})(),ps,d);
});})(vec__27143,w,c,wilds__$1,catch_all__$1,___$1,vec__27140,seq__27141,first__27142,seq__27141__$1,p,ps,children_SINGLEQUOTE_,wilds_QMARK_))
);
return reitit.segment.segment.call(null,children__$1,wilds__$1,catch_all__$1,self__.match);
}
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

reitit.segment.t_reitit$segment27136.prototype.reitit$segment$Segment$_lookup$arity$3 = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (_,p__27146,path_params){
var self__ = this;
var vec__27147 = p__27146;
var seq__27148 = cljs.core.seq.call(null,vec__27147);
var first__27149 = cljs.core.first.call(null,seq__27148);
var seq__27148__$1 = cljs.core.next.call(null,seq__27148);
var p = first__27149;
var ps = seq__27148__$1;
var ___$1 = this;
if((p == null)){
if(cljs.core.truth_(self__.match)){
return cljs.core.assoc.call(null,self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params);
} else {
return null;
}
} else {
var or__4047__auto__ = reitit.segment._lookup.call(null,reitit.impl.fast_get.call(null,self__.children_SINGLEQUOTE_,p),ps,path_params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (cljs.core.truth_((function (){var and__4036__auto__ = self__.wilds_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return (!(clojure.string.blank_QMARK_.call(null,p)));
} else {
return and__4036__auto__;
}
})())?cljs.core.some.call(null,((function (or__4047__auto__,___$1,vec__27147,seq__27148,first__27149,seq__27148__$1,p,ps,children_SINGLEQUOTE_,wilds_QMARK_){
return (function (p1__27133_SHARP_){
return reitit.segment._lookup.call(null,reitit.impl.fast_get.call(null,self__.children_SINGLEQUOTE_,p1__27133_SHARP_),ps,cljs.core.assoc.call(null,path_params,p1__27133_SHARP_,p));
});})(or__4047__auto__,___$1,vec__27147,seq__27148,first__27149,seq__27148__$1,p,ps,children_SINGLEQUOTE_,wilds_QMARK_))
,self__.wilds):null);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
if(cljs.core.truth_(self__.catch_all)){
return reitit.segment._catch_all.call(null,self__.children_SINGLEQUOTE_,self__.catch_all,path_params,p,ps);
} else {
return null;
}
}
}
}
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

reitit.segment.t_reitit$segment27136.getBasis = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"children'","children'",-942868266,null),new cljs.core.Symbol(null,"wilds?","wilds?",-1842060252,null),new cljs.core.Symbol(null,"meta27137","meta27137",-1976830006,null)], null);
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

reitit.segment.t_reitit$segment27136.cljs$lang$type = true;

reitit.segment.t_reitit$segment27136.cljs$lang$ctorStr = "reitit.segment/t_reitit$segment27136";

reitit.segment.t_reitit$segment27136.cljs$lang$ctorPrWriter = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.segment/t_reitit$segment27136");
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

/**
 * Positional factory function for reitit.segment/t_reitit$segment27136.
 */
reitit.segment.__GT_t_reitit$segment27136 = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function reitit$segment$__GT_t_reitit$segment27136(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,wilds_QMARK___$1,meta27137){
return (new reitit.segment.t_reitit$segment27136(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,wilds_QMARK___$1,meta27137));
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

}

return (new reitit.segment.t_reitit$segment27136(children,wilds,catch_all,match,children_SINGLEQUOTE_,wilds_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.segment","segment","reitit.segment/segment",424393474)], null)));
});

reitit.segment.segment.cljs$lang$maxFixedArity = 4;

reitit.segment.insert = (function reitit$segment$insert(root,path,data){
return reitit.segment._insert.call(null,(function (){var or__4047__auto__ = root;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.segment.segment.call(null);
}
})(),reitit.impl.segments.call(null,path),reitit.segment.map__GT_Match.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null)));
});
reitit.segment.create = (function reitit$segment$create(paths){
return cljs.core.reduce.call(null,(function (segment,p__27151){
var vec__27152 = p__27151;
var p = cljs.core.nth.call(null,vec__27152,(0),null);
var data = cljs.core.nth.call(null,vec__27152,(1),null);
return reitit.segment.insert.call(null,segment,p,data);
}),null,paths);
});
reitit.segment.lookup = (function reitit$segment$lookup(segment,path){
return reitit.segment._lookup.call(null,segment,reitit.impl.segments.call(null,path),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=segment.js.map?rel=1552827692010
