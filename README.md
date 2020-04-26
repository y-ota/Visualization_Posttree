# ママの声の可視化
日本財団のポストツリーをLDAとD3.jsによって可視化しています。  
マウスオーバーでママの声がポップアップします。  
距離が近いほど類似したママの声となり、色が近いほど類似した話題になります。
<http://web.sfc.keio.ac.jp/~yota/posttree/>
![横浜のママの声](https://github.com/y-ota/Visualization-of-Posttree/blob/master/images/sample.png)


## How to implement
* LDAで各ポストツリーのトピック比率を求める。(k=7)  
* 2次元平面にマッピングするために各ポストツリーのベクトル(x,y)を求める。その際、t-SNEを用いて、7次元のトピック比率を2次元に変換し、それをポストツリーの座標(x,y)とした。
* 色付けに必要なRGBの値は、t-SNEを用いて、7次元のトピック比率を3次元に変換し、それをポストツリーの色(r,g,b)とした。
* 上記のデータを用いて、D3.jsによって可視化した。

## References
[1]“Latent Dirichlet Allocation” Journal of Machine Learning Research Vol.3, pp. 993–1022, 2003  
[2]“LYRICSRADAR: A LYRICS RETRIEVAL SYSTEM BASED ON LATENT TOPICS OF LYRICS” 15th International Society for Music Information Retrieval Conferenc  
[3]“Finding scientific topics” Proceedings of the National Academy of Sciences Vol.101 Suppl 1, 2004   
[4]t-SNE http://lvdmaaten.github.io/tsne/

## License
[MIT License](https://github.com/y-ota/Visualization_Posttree/blob/master/LICENSE)
