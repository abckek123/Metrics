package com.github.mauricioaniche.metric;

import org.eclipse.jdt.core.dom.ASTNode;
import org.eclipse.jdt.core.dom.ASTVisitor;
import org.eclipse.jdt.core.dom.CompilationUnit;
import org.eclipse.jdt.core.dom.EnumDeclaration;
import org.eclipse.jdt.core.dom.MethodDeclaration;
import org.eclipse.jdt.core.dom.Modifier;
import org.eclipse.jdt.core.dom.TypeDeclaration;

import com.github.mauricioaniche.ck.MetricValue;
import com.github.mauricioaniche.ck.MetricReport;
import com.github.mauricioaniche.ck.MetricExtractor;

public class NOSM extends ASTVisitor implements MetricExtractor {

  private int methods;

  @Override
  public boolean visit(MethodDeclaration node) {
    if (Modifier.isStatic(node.getModifiers())) {
      methods++;
    }
    return false;
  }

  @Override
  public void execute(ASTNode node, MetricReport report) {
    String fullyQualifiedName = (String) node.getProperty("fullyQualifiedName");
    if (fullyQualifiedName != null && fullyQualifiedName.isEmpty() == false) {
      node.accept(this);
      MetricValue ckn = report.getByClassName(fullyQualifiedName);
      ckn.setNosm(methods);
    }
  }
}
