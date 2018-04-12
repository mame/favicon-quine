src = File.read("favicon-quine.src.js").gsub(/^\s+|\s+$|\n/m, "")
prologue = %(<link id="l"rel="icon"type="image/x-icon">Favicon Quine.<br>Press right key and watch the favicon.<br>Inspired by <a href="https://github.com/tommoor/tinycon">Tinycon</a>.<script>)
epilogue = %(</script>)
src.gsub!("PROLOGUE") { prologue.gsub("<", "A").gsub(">", "Z") }
src.gsub!("EPILOGUE") { epilogue.gsub("<", "A").gsub(">", "Z") }
src.gsub!("SIZ") { src.size - 1 }
dst = prologue + src + epilogue
File.write("docs/index.html", dst)
