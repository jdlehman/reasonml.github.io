webpackJsonp([95],{"./node_modules/json-loader/index.js!./.cache/json/api-type-printexc-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_Printexc.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;val&#xA0;to_string&#xA0;:&#xA0;exn&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;print&#xA0;:&#xA0;(&apos;a&#xA0;-&gt;&#xA0;&apos;b)&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;b\n&#xA0;&#xA0;val&#xA0;catch&#xA0;:&#xA0;(&apos;a&#xA0;-&gt;&#xA0;&apos;b)&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;b\n&#xA0;&#xA0;val&#xA0;print_backtrace&#xA0;:&#xA0;Pervasives.out_channel&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;get_backtrace&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;record_backtrace&#xA0;:&#xA0;bool&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;backtrace_status&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;register_printer&#xA0;:&#xA0;(exn&#xA0;-&gt;&#xA0;string&#xA0;option)&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;type&#xA0;raw_backtrace\n&#xA0;&#xA0;val&#xA0;get_raw_backtrace&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;Printexc.raw_backtrace\n&#xA0;&#xA0;val&#xA0;print_raw_backtrace&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Pervasives.out_channel&#xA0;-&gt;&#xA0;Printexc.raw_backtrace&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;raw_backtrace_to_string&#xA0;:&#xA0;Printexc.raw_backtrace&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;get_callstack&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;Printexc.raw_backtrace\n&#xA0;&#xA0;val&#xA0;set_uncaught_exception_handler&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;(exn&#xA0;-&gt;&#xA0;Printexc.raw_backtrace&#xA0;-&gt;&#xA0;unit)&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;type&#xA0;backtrace_slot\n&#xA0;&#xA0;val&#xA0;backtrace_slots&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Printexc.raw_backtrace&#xA0;-&gt;&#xA0;Printexc.backtrace_slot&#xA0;array&#xA0;option\n&#xA0;&#xA0;type&#xA0;location&#xA0;=&#xA0;{\n&#xA0;&#xA0;&#xA0;&#xA0;filename&#xA0;:&#xA0;string;\n&#xA0;&#xA0;&#xA0;&#xA0;line_number&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;start_char&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;end_char&#xA0;:&#xA0;int;\n&#xA0;&#xA0;}\n&#xA0;&#xA0;module&#xA0;Slot&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;sig\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;type&#xA0;t&#xA0;=&#xA0;Printexc.backtrace_slot\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;is_raise&#xA0;:&#xA0;Printexc.Slot.t&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;location&#xA0;:&#xA0;Printexc.Slot.t&#xA0;-&gt;&#xA0;Printexc.location&#xA0;option\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;format&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;Printexc.Slot.t&#xA0;-&gt;&#xA0;string&#xA0;option\n&#xA0;&#xA0;&#xA0;&#xA0;end\n&#xA0;&#xA0;type&#xA0;raw_backtrace_slot\n&#xA0;&#xA0;val&#xA0;raw_backtrace_length&#xA0;:&#xA0;Printexc.raw_backtrace&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;get_raw_backtrace_slot&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Printexc.raw_backtrace&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;Printexc.raw_backtrace_slot\n&#xA0;&#xA0;val&#xA0;convert_raw_backtrace_slot&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Printexc.raw_backtrace_slot&#xA0;-&gt;&#xA0;Printexc.backtrace_slot\n&#xA0;&#xA0;val&#xA0;exn_slot_id&#xA0;:&#xA0;exn&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;exn_slot_name&#xA0;:&#xA0;exn&#xA0;-&gt;&#xA0;string\nend</pre></div>'}}},pathContext:{relativePath:"api/type_Printexc.html"}}}});
//# sourceMappingURL=path---api-type-printexc-html-a17ebb7ad237adab359f.js.map