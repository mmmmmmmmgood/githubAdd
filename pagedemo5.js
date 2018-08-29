$(function(){
    $('select.select').select();
    function createDemo(name){
        var container = $('#pagination-' + name);
        var sources = function(){
            var result = [];

            for(var i = 1; i < 196; i++){
                result.push(i);
            }

            return result;
        }();

        var options = {
            dataSource: sources,
            className: 'paginationjs-theme-blue',
            callback: function(response, pagination){
                window.console && console.log(response, pagination);
                var dataHtml = '<table class="layui-table">';
				dataHtml+='<tr><th>序号</th><th>服务商</th><th>工号</th><th>姓名</th><th>评分</th><th>匹配工单</th></tr>'; 
                $.each(response, function(index, item){
                    dataHtml += '<tr><td>'+ item +'</td><td>服务商1</td><td>201208110039</td><td>张三</td><td>4.5</td><td>工单1</td></tr>';
                });
                dataHtml += '</table>';
				console.log(dataHtml)
                container.prev().html(dataHtml);
            }
        };
        //$.pagination(container, options);
        container.pagination(options);
        return container;
    }
    createDemo('demo1');
    createDemo('demo2');
});
