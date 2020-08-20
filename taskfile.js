import ts from 'taskr-servor';
const dest = 'dist';

export async function js(task) {
    await task.source('src/js/**/*.js').target(dest)
}

export async function html(task) {
    await task.source('src/html/index.html').target(dest)
}

export async function dev(task) {
    await task.parallel(['html', 'js']);
    await task.watch('src/html/index.html', 'html');
    await task.watch('src/js/**/*.*', 'js');
    ts.start({
        root: dest,
        port: 2000,
    });
}