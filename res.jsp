<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ page import="com.sample.hr.EmpDAO" %>

<% //scriptlet tag
	String empIdStr = request.getParameter("empid");
	int empid = Integer.parseInt(empIdStr);
	EmpDAO dao = new EmpDAO();
	String name = dao.getEmpNameById(empid);
	//out.print((int)(Math.random() * 45 + 1));
	out.print(name);
%>